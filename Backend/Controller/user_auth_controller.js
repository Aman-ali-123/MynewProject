let user_auth = require("../Model/User_auth_schema");

let jwt=require("jsonwebtoken")
let bcrypt=require("bcrypt")
let SECRET_KEY="MyNewProject"

let SignUpApi = async (req, res) => {
  console.log(req.body);

  let {firstName,lastName,email,password,confirmPassword}=req.body

  try {
    if (password !==confirmPassword) {
        res.json({
            message:"Password doesnot match"
        })
        
    } else {

      let hashpassword=await bcrypt.hash(password,15)
      let hashConfirmPassword=await bcrypt.hash(confirmPassword,15)
        
        let signUpUser=await user_auth({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:hashpassword,
            confirmPassword:hashConfirmPassword,

        }).save()

        let token =jwt.sign({email:signUpUser.email},SECRET_KEY)

        res.json({
            message:"Registration successfully",
            token:token,

        })
    }
  } catch (error) {
    res.json({
        message:"Something went wrong"
    })
  }
};

let LoginApi = async (req, res) => {
  console.log(req.body);

  let {email,password,confirmPassword}=req.body

  try {
    if (password !== confirmPassword) {
      res.json({
        message:"Password and confirm password does not match"
      })
      
    } else {
      let exsitingUser= await user_auth.findOne({email:email})

      if (!exsitingUser) {
        res.json({
          message:"User not found"
        })
      } else {
        
        let matchPassword = await bcrypt.compare(password,exsitingUser.password)

        if (!matchPassword) {
          req.json({
            message:"Invalid Password"
          })
          
        } else {

          let token= jwt.sign({email:exsitingUser.email},SECRET_KEY)

          res.json({
            message:"login successfull",
            token:token
          })
        }
      }
      
    }
    
  } catch (error) {
    res.json({
      message:"Something went wrong"
    })
  }
};

module.exports = {SignUpApi, LoginApi};
