require('dotenv').config()
const mongoose=require('mongoose')

const dbConnection=async()=>{
    const dbUrl= process.env.DB_URL;
    const dbName=process.env.DB_Name;
    // console.log(`${dbUrl}/${dbName}`);
    
try {
    const db=await mongoose.connect(`${dbUrl}/${dbName}`)
    console.log('Database is connected');
    
    // mongoose.connection.on('connected',()=>(
    //     console.log('Database is connected')
    // ))
    // mongoose.connection.on('error',()=>{
    //     console.log('not connect')
    // })
} catch (error) {
   console.log('Database not Connected',error) 
}
}

module.exports=dbConnection;