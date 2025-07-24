let mongoose =require("mongoose")

 let db=mongoose.connect("mongodb://127.0.0.1/mynewproject")
 .then(()=>{
    console.log("Database connected");

 })
 .catch(()=>{
    console.log("Database not connected");
 })

 module.exports=db;