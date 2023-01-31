const userModel=require("../models/userModel")
const jwt=require("json-web-token")


const auth= async(req,res,next)=>{
    try {
        
        let token = req.token
if(!token){return res.status(400).send({status:false,message:"Token not found "})}

jwt.verify(token,"interviewAssign",(err,decodedToken)=>{
    if(err){return res.status(400).send({status:false,message:err.message})}

    req.decodedToken=decodedToken
    next()
})
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}