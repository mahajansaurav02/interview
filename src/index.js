const express=require("express")
const route = require("./routes/route")
const mongoose=require("mongoose")

const app=express()
mongoose.connect("mongodb+srv://book-management:31VMJSSWSjcdoaAO@cluster0.eemzti8.mongodb.net/group48Database?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/",route)

app.listen(3000,()=>{
    console.log("Listen on port"+3000)
})


