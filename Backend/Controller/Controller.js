let userData=require("../Model/UserSchema")

let PostDataApi=async(req,res)=>{

    console.log(req.body);

    let {FirstName,lastName,email,password}=req.body
    try {

        let exisitinguser=await userData.findOne({email:email})

        if(exisitinguser){
            res.json({ message:"User already exist"})
        }
        else{
            let saveData=await userData({
                firstName:FirstName,
                lastName:lastName,
                email:email,
                password:password
            }).save()
    
            res.json({
                message:"Data insert successfully"
            })
        }

       
    } catch (error) {
        
        res.json({
            message:"Something went wrong"
        })
    }

    
    
}

let GetDataApi=async (req,res)=>{
    
    try {
        let getData=await userData.find({});
        res.json({data:getData})
    } catch (error) {
        res.json({message:"Something went wrong"})
    }
    
}


let getdatabyname=async(req,res)=>{
    let{email}=req.body;
try {
    let getData=await userData.findOne({email:email})
    res.json({data:getData})
} catch (error) {
    res.json({message:"Something went wrong"})
}

}


let GetDataById=async(req,res)=>{
    console.log(req.params.id)
    let id=req.params.id

   
    try {
    
        let getData=await userData.findById(id)
        if(!getData){
        res.json({
            message:"Id doesnot exist"
        })
    }
    else{
        
        res.json({
            
            data:getData
        })
    }
    } catch (error) {
        res.json({message:"Something went wrong"})
    }
}

let UpdateDataApi=async(req,res)=>{
    console.log(req.params.id);
    console.log(req.body);

    let id =req.params.id
    let{firstName,lastName,email,password}=req.body

    try {
        let  exisitingUser=await userData.findById(id)
        if(!exisitingUser){
            res.json({
                message:"User not exist"
            })
        }else{
            let updateData=await userData.findByIdAndUpdate(id,
                {firstName: firstName,
                lastName:lastName,
                email:email,
                password:password}
            )

            res.json({
                message:"Data updated successfully",
            })
        }
        
    } catch (error) {
        res.json({
            message:"Something went wrong"
        })
        
    }

}


let deleteDataApi=async(req,res)=>{

    let id=req.params.id

     try {

        let exisitingUser=await userData.findById(id)

        if(!exisitingUser){
            res.json({
                message:"User not found"
            })
        }else{
            let deleteData=await userData.findByIdAndDelete(id)

            res.json({
                message:"Data deleted successfully"
            })
        }
        
     } catch (error) {

        res.json({
            message:"Something went wrong"
        })
        
     }


}


module.exports={PostDataApi,GetDataApi,getdatabyname,GetDataById,UpdateDataApi,deleteDataApi}