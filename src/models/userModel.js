const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({

    Name:{type:String,requied:true},
    email:{type:String,requied:true,unique:true},
    password:{type:String,requied:true},
    conpassword:{type:String,requied:true}

},{timestamps:true})

module.exports=mongoose.model("user",userSchema)