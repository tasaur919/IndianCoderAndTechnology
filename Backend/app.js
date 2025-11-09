const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser')
const dbConnection=require('./db')
const app=express()

const router=require('./routes/userapi.js')

app.use(express.json())
app.use(cors());
app.use(bodyParser.json());
dbConnection()
//userSchema api
app.use('/api',router);

const port=process.env.PORT || 5000




app.listen(port,()=>{
    console.log("Server is Running...");
    
})