const express = require("express");
const UserModel = require("../models/User.models");
const router = express.Router();
const bcrypt=require('bcryptjs')
//http://localhost:5000/api/useradd

router.post("/useradd", async (req, res) => {
  try {
    const { user_name, full_name, email, password, dob, gender, mobile } = req.body;
    if(!user_name || !email || !password){
       return res.status(400).json({message:"Required fields are missing!!"})
    }
 //for existing user
 const existingUser=await UserModel.findOne({$or:[{email},{user_name}]})
    if(existingUser){
       return res.status(400).json({message:"user_name or Email Allready exist!"})
    }
    const user = new UserModel({
      user_name,
      full_name,
      email,
      password: await bcrypt.hash(password,10),
      dob,
      gender,
      mobile,
    });
    const users = await user.save();
    res.status(200).json({ msg: "Saved User", "users":users });
  } catch (error) {
    console.log("User not add");
    res.status(500).json({ message: "Internal Server Error!" });
  }
});

//http://localhost:5000/api/allusers
router.get('/allusers',async(req,res)=>{
try {
    const allUsers=await UserModel.find()
    if(!allUsers){
        return res.status(400).json({message:"User not found!"})
    }
    res.json(allUsers)
} catch (error) {
    res.status(500).json({message:"Internal server error!"})
}
})

//http://localhost:5000/api/update
router.put('/update/:UID',async(req,res)=>{
   try {
    const UID=req.params.UID;
    const newUpdate=await UserModel.findByIdAndUpdate(
        UID,
        {$set:req.body},
        {new:true}
    )
    if(!newUpdate){
           res.status(400).json({message:"User not found!"})
    }
    // const update=await newUpdate.save();
    res.json(newUpdate)
   } catch (error) {
    res.status(500).json({message:"Internal server error!"})
   }
})

//http://localhost:5000/api/login
router.post('/login',async(req,res)=>{

    try {
        const {email,password}=req.body;
        const userLogin=await UserModel.findOne({email});
        if(!userLogin)
        {
            return res.status(400).json({message:"Email not found","sts":"1"})
        }
        const isMatch=await bcrypt.compare(password,userLogin.password)
        if(!isMatch){
            return res.status(400).json({message:"password not match!","sts":"1"})
        }
        res.json({"message":"Login Successful!","sts":"0"})
    } catch (error) {
        res.status(500).json({message:"Internal server error!","sts":"2"})
    }
})

module.exports = router;
