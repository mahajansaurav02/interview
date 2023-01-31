const userModel=require("../models/userModel")


const verifyUser=async(req,res)=>{

    let data=req.body

    if(req.body.choose==="decline"){
        return res.status(400).send({status:false,message:"Verification process declined"})
    }
const changeVerifyStatus= await userModel.findOneAndUpdate({userId:req.userId},{$set:{verificationStatus:true}})
    return res.status(200).send({status:true,message:"Verification process complete Thank You!!"})
}

module.export={verifyUser}