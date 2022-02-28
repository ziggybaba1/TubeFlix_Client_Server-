const router=require("express").Router();
const List=require("../models/List");
const Movie=require("../models/Movie");
const verify = require ("../verifyToken");
const jwt =require("jsonwebtoken");

//CREATE
router.post("/", verify, async (req,res)=>{
    if(req.user.isAdmin){
        const newList = new List(req.body);
        try {
            const savedList = await newList.save();
            res.status(200).json(savedList);
          
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You have no permission to create list!");
    }
})

//UPDATE
router.put("/:id", verify, async (req,res)=>{
    if(req.user.isAdmin){
        try {
            const updatedList = await List.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
            res.status(200).json(updatedList);
          
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You have no permission to update list!");
    }
})

//DELETE
router.delete("/:id", verify, async (req,res)=>{
    if(req.user.isAdmin){
        try {
           await List.findByIdAndDelete(req.params.id); 
           res.status(200).json("List has been deleted...");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can not delete list!");
    }
})

//GET
router.get("/find/:id", verify, async (req,res)=>{
        try {
          
           
          const list= await List.findById(req.params.id); 
           res.status(200).json(list);
        } catch (err) {
            res.status(500).json(err);
        }
})



//GET ALL List
router.get("/",  verify, async (req,res)=>{
    const queryType=req.query.type;
    const queryGenre=req.query.genre;
    let list=[];
    // if(req.user.isAdmin){
        try {
            // const list = query? await List.find().sort({id:-1}).limit(10) : await List.find().reverse() ; 
            if(queryType&&queryType==="movies"||queryType==="series"){
                if(queryGenre){
                    list= await List.aggregate([
                        {$sample: {size:10}},
                        {$match: {type: queryType, genre: queryGenre,private:false}},
                    ]);
                } else {
                    list= await List.aggregate([
                        {$sample: {size:10}},
                        {$match: {type: queryType,private:false}},
                    ]);
                }
                
            } else if(queryType&&queryType==="new") {
                list= await List.aggregate([
                    {$sample: {size:10}},
                    {$match: {private:false}},
                ]);
            }
            else if(queryType&&queryType==="list") {
                list= await List.aggregate([
                    {$sample: {size:10}},
                    {$match: {private:true,userId:req.user.id}},
                ]);
            }
            else if(queryType&&queryType==="popular"){
                let movie=[];
                movie=await Movie.aggregate([{$sample: {size:100}}]);
                let arrayMovies=movie.sort((a, b) => (a.watch > b.watch ? -1 : 1));
                list=[
                    {
                        title:"Trending Movies",
                        content:arrayMovies.map((item)=>{return item._id})
                    }
                ];
            }
            else{
                list= await List.aggregate([
                    {$sample: {size:10}},
                    {$match: {private:false}},
                ]);
            }
            res.status(200).json(list);
        } catch (err) {
            res.status(500).json(err);
        }
    // } else {
    //     return res.status(403).json("You can not delete List!");
    // }
})

//GET USER STATS
router.get("/stats", verify, async (req,res)=>{
    const today= new Date();
    const lastYear= today.setFullYear(today.setFullYear()-1);
    const monthsAray=[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    try {
        const data = await List.aggregate([
            {
                $project: {
                    month: {$month: "$createdAt"},
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: {$sum:1},
                }
            },
        ]);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;