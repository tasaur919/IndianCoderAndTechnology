const mongoose=require('mongoose')

const User_Schema=new mongoose.Schema({
    user_name:{
        type:String,
        required:true,
        unique:true,
    },
    full_name:{
        type:String,
        required:true,
       
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
       
    },
    dob:{
        type:Date,
        required:true,
        
    },
    gender:{
        type:String,
        required:true,
        default:"male",
        enum:["male","female","other"],
    },
    mobile:{
        type:Number,
         required:true,
    },
})

const UserModel=mongoose.model('User',User_Schema)
module.exports=UserModel