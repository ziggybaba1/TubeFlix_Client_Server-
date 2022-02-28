const router=require("express").Router();
const Movie=require("../models/Movie");
const verify = require ("../verifyToken");
const List=require("../models/List");
const jwt =require("jsonwebtoken");

//CREATE
router.post("/", verify, async (req,res)=>{
    if(req.user.isAdmin){
        const newMovie = new Movie(req.body);
        try {
            const savedMovie = await newMovie.save();
            res.status(200).json(savedMovie);
          
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You have no permission to create movie!");
    }
})

//UPDATE
router.put("/:id", verify, async (req,res)=>{
    if(req.user.isAdmin){
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
            res.status(200).json(updatedMovie);
          
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You have no permission to update movie!");
    }
})

//DELETE
router.delete("/:id", verify, async (req,res)=>{
    if(req.user.isAdmin){
        try {
           await Movie.findByIdAndDelete(req.params.id); 
           res.status(200).json("movie has been deleted...");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can not delete movie!");
    }
})

//GET
router.get("/find/:id",verify, async (req,res)=>{
        try {
            // let token=req.query.tokenize;
            const id=req.params.id; 
            // const user=jwt.verify(token,process.env.SECRET_KEY);
           const user=req.user;
            const listUser= await List.findOne({userId:req.user?.id});
            if(listUser){
                let arrayContent=listUser.content;
                if(arrayContent.filter(element => element === id)==0){
                    arrayContent.unshift(req.params.id);
                    await List.findByIdAndUpdate(listUser._id,{content:arrayContent},{new:true});
                }
            }else{
                const newList = new List({
                    title:"My List_"+req.user?.id,
                    type:"movie",
                    genre:"Action",
                    content:[id],
                    private:true,
                    userId:req.user?.id
                }); 
                await newList.save();
            }
       
          const movie= await Movie.findById(req.params.id); 
          const updatedMovie = await Movie.findByIdAndUpdate(req.params.id,{watch:movie.watch+1},{new:true});
           res.status(200).json(movie);
        } catch (err) {
            res.status(500).json(err);
        }
})

//GET RANDOM
router.get("/random", async (req,res)=>{
    const query=req.query.type; let movie;
        try {
            if(query==="series"){
                movies=await Movie.aggregate([
                    {$match: {isSeries:true}},
                    {$sample: {size:1}}, //give any samples
                ]);
            }
            else{
                movies=await Movie.aggregate([
                    {$match: {isSeries:false}},
                    {$sample: {size:1}}, //give any samples
                ]);
            }
           res.status(200).json(movies);
        } catch (err) {
            res.status(500).json(err);
        }
   
})

//GET ALL MOVIES
router.get("/", verify, async (req,res)=>{
    const query=req.query.new;
    if(req.user.isAdmin){
        try {
            const movies = query? await Movie.find().sort({id:-1}).limit(10) : await Movie.find().reverse() ; 
            res.status(200).json(movies);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can not delete movie!");
    }
})

//GET USER STATS
router.get("/stats", async (req,res)=>{
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
        const data = await Movie.aggregate([
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