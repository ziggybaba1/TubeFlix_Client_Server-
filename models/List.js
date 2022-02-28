const mongoose =require ("mongoose");

const ListSchema = new mongoose.Schema({
    title:{type:String,required:true},
    private:{type:Boolean,default:false},
    type:{type: String},
    genre: {type: String},
    content: {type: Array},
    userId:{type:String},
},{timestamps:true}
);

module.exports = mongoose.model("List",ListSchema);