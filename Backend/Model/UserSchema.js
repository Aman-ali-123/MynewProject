let mongoose=require("mongoose")

let userSchema=mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
});

let userData=mongoose.model("userData",userSchema)


module.exports=userData;