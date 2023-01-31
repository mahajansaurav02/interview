const express=require("express")
const router=express.Router()
const {createUser,loginUser,updateUser}=require("../controllers/userController")
const {verifyUser}=require("../controllers/verificationController")

router.post("/createuser",createUser)
router.post("/loginuser",loginUser)
router.post("/verification",verifyUser)

router.put("/updateuser",updateUser)
module.exports=router