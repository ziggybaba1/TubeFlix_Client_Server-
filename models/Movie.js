const mongoose =require ("mongoose");

const MovieSchema = new mongoose.Schema({
    title:{type:String,required:true,unique:true},
    desc:{type: String},
    img: {type: String},
    imgTitle: {type: String},
    imgSn: {type: String},
    trailer: {type: String},
    video: {type: String},
    year: {type: String},
    limit: {type: Number},
    genre: {type: String},
    watch: {type: Number,default:0},
    isSeries: {type: Boolean,default:false},
},{timestamps:true}
);

module.exports = mongoose.model("Movie",MovieSchema);