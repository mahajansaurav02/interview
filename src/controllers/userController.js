const userModel=require("../models/userModel")
const jwt=require("json-web-token")


let createUser=async (req,res)=>{
try {
    let data= req.body

let [Name,email,password,conPassword]=data

if(!Name){return res.status(400).send({status:false,message:"Name section is mandotary"})}
if(!email){return res.status(400).send({status:false,message:"email section is mandotary"})}
if(!password){return res.status(400).send({status:false,message:"password section is mandotary"})}
if(!conPassword){return res.status(400).send({status:false,message:"conPassword section is mandotary"})}

if(password!==conPassword){
    return res.status(400).send({status:false,message:"Password not matched please check password"})
}

const userCreate=await userModel.create(data)
return res.status(201).send({status:false,message:"user regestration is successful varify your email with givenlink",data:"www.verifyyouremail.com"})

} catch (error) {
    return res.status(500).send({status:false,message:error.message})
}

}


const loginUser=async ()=>{

    try {
        
        let [userId,password]=req.body

    if(!userId){
        return res.status(400).send({status:false,message:"Please provide userId"})
    }
    if(!password){
        return res.status(400).send({status:false,message:"Please provide password"})
    }

    const checkUser=await userModel.findOne({userId:userId,password})

    if(!checkUser){return res.status(404).send({status:false,message:"User not found!! Please signUp first"})}

const loginToken = jwt.sign({userId:userId.toString(),expiresIn:"24hr"},"interviewAssign")
 req.token =loginToken
return res.status(201).send({status:true,message:"Login Successful",data:loginToken})




    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
    

}

module.exports={createUser,loginUser}