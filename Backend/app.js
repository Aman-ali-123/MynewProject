let express=require("express");
let router=require("./Routes/Route")
let db=require("./Database/db")
let app=express()
let cors=require("cors")

app.use(express.json())
app.use(cors())

app.use("/",router)

app.listen(5000,()=>{
    console.log("Port 5000 is activate")
})


console.log("I am Node")