const express=require("express")
const router=express.Router()
const {createUser,loginUser}=require("../controllers/userController")
const {verifyUser}=require("../controllers/verificationController")

router.post("/createuser",createUser)
router.post("/createuser",loginUser)
module.exports=router