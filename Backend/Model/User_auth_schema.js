let mongoose=require ("mongoose")

let user_auth_schema=mongoose.Schema({
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
    },
    confirmPassword:{
        type:String,
        require:true
    }
});

let user_auth = mongoose.model("user_auth",user_auth_schema)

module.exports=user_auth;