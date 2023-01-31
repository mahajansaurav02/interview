const userModel=require("../models/userModel")
const jwt=require("json-web-token")


const auth= async(req,res,next)=>{
    try {
        



    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}