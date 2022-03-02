const express=require("express");
const app =express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const path = require('path');
//Register the route
const authRoute=require("./routes/auth");
const userRoute=require("./routes/Users");
const movieRoute=require("./routes/Movie");
const listRoute=require("./routes/List");
const cors = require('cors');
const publicPath = path.join(__dirname, '.', '/build');
app.use(cors({
    origin: '*'
}));
dotenv.config();
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      
  }).then(()=>console.log("DB Connection Successfull!"))
  .catch(err => console.log(err));
}
app.use(express.json()); //use json files
 app.use('/api/auth',authRoute);
 app.use('/api/user',userRoute);
 app.use('/api/movies',movieRoute);
 app.use('/api/list',listRoute);
 app.use('/api/list',listRoute);
 app.use(express.static(publicPath));
 app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

//  app.listen(3002, () => {
//   console.log(`Example app listening on port 3002`)
// })
app.listen(process.env.PORT || 5000);