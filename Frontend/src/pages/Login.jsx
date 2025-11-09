import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { toast, ToastContainer } from 'react-toastify';
// const useAuth=require('../context/AuthContext')
function Login() {
  const [toggle,setToggle]=useState(false)
  const toggleLR=()=>{
    setToggle(!toggle)
  }

  // const {login}=useAuth()
  
  //for login 
  const [userLogin,setUserLogin]=useState({
        email:'',
      password:'',
  })
const handleChangeLog=(e)=>{
  const {name,value}=e.target;
  setUserLogin({
    ...userLogin,
    [name]:value,
  })
}

// const [msg,setMsg]=useState(null)
const navigate=useNavigate();

const handleSubmitLog=async(e)=>{
  e.preventDefault();
  try {
    const userlog=await axios.post('http://localhost:5000/api/login',userLogin)
    console.log("Login successful!",userlog);
    if(userlog.data.sts==0){
      toast.success("Login successful!",{position:"top-center"})
      // login()
      setTimeout(()=>{
        navigate('/devtools')
      },1000)
    }
    
  } catch (error) {
    console.log("error:",error);
    
  }
}

 //for register or filde submited form
const [users,setUsers]=useState({
      user_name:'',
      full_name:'',
      email:'',
      password:'',
      dob:'',
      gender:'',
      mobile:'',
})
const handleChangeReg=(e)=>{
 const {name,value}=e.target;
 setUsers({
   ...users,
   [name]:value
 })
}

const handleSubmitReg=async()=>{
   
   try {
    const savedUser=await axios.post("http://localhost:5000/api/useradd",users);
   console.log(savedUser);
   } catch (error) {
    console.log("error:",error.response.data.message);
    
   }
   
   
}

  
  return (
    <div className='min-h-screen mt-26 px-5 md:mt-28 '>
      <div className='grid grid-cols-1 md:grid-cols-3 flex-col md:flex-row items-center justify-center  gap-5 py-10'>
      <Link to={'/'} className=' md:text-[22px] text-center left-0 mr-5 md:mr-0 text-blue-400 underline order-2 md:order-1'><ArrowBackIcon/>Back to the Home</Link>
       <div className=" flex flex-col justify-center items-center order-1 md:order-2">
                          <span className="text-[20px]">
                            <Link to={"#"} className="text-4xl font-semibold flex flex-col">
                              {" "}
                              <span className="bg-linear-to-l from-orange-400 via-blue-400 to-red-400 bg-clip-text text-transparent">
                                {" "}
                                Indian Coder{" "}
                              </span>{" "}
                              <span className="text-[16px] ml-5 text-blue-200">& Technology</span>
                            </Link>
                          </span>
                        </div>
      </div>
      <div className='flex flex-col  justify-center items-center'>
        {!toggle?
        <div className='login border border-gray-600 rounded px-8 py-6 '>
          <form  onSubmit={handleSubmitLog}>
             <div className='flex flex-col gap-8'>
              <h1 className='text-center text-3xl font-bold '>Login</h1>
              <div>
                <p className='mb-2'>Enter Email:</p>
                <input type="email" onChange={handleChangeLog} name='email' placeholder='example@gmail.com' className='border w-full px-2 rounded py-1 border-gray-300 outline-none' required/>
              </div>
              <div>
                <p className='mb-2'>Enter Password:</p>
                <input type="password" onChange={handleChangeLog} name='password' placeholder='password' className='border px-2 rounded py-1 border-gray-300 w-full outline-none' required/>
              </div>
              
              <div className='bg-green-400 text-white text-center rounded py-1 font-bold w-full cursor-pointer shadow-lg hover:bg-green-500 duration-200 hover:text-[17px] hover:shadow-green-600/50 mb-2'>
                <button>Login</button>
              </div>
              
             </div>
             <div>
                <p className=''>If not Register then <a href="#" onClick={toggleLR} className='text-blue-500 underline font-semibold'>click here</a> </p>
              </div>
          </form>
 </div>
        :
          <div className='register w-full border border-gray-600 rounded px-8 py-4 '>
          <form  onSubmit={(e)=>(
            e.preventDefault(),
            handleSubmitReg()
          )}>
              <h1 className='text-center text-3xl font-bold pb-8'>Register</h1>
             <div className='gap-8 grid grid-cols-1 md:grid-cols-2'>
              <div>
                <p className='mb-1'>Enter UserName:</p>
                <input type="text" name='user_name' onChange={handleChangeReg} placeholder='User_Name' className='border px-2 rounded py-1 w-full border-gray-300 outline-none' required/>
              </div>
              <div>
                <p className='mb-1'>Enter FullName:</p>
                <input type="text" name='full_name' onChange={handleChangeReg} placeholder='FullName' className='border px-2 rounded py-1 w-full border-gray-300 outline-none' required/>
              </div>
              
              <div>
                <p className='mb-1'>Enter Email:</p>
                <input type="email" name='email' onChange={handleChangeReg} placeholder='example@gmail.com' className='border px-2 rounded py-1 border-gray-300 w-full outline-none' required/>
              </div>
              <div>
                <p className='mb-1'>Enter Password:</p>
                <input type="password" name='password' onChange={handleChangeReg} placeholder='password' className='border px-2 rounded py-1 border-gray-300 outline-none w-full' required/>
              </div>
              <div>
                <p className='mb-1'>Select Gender:</p>
                <select required onChange={handleChangeReg} name='gender' className='border px-2 rounded py-1 border-gray-300 outline-none w-full'>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <p className='mb-1'>Choose DOB:</p>
                <input type="date" name='dob' onChange={handleChangeReg} placeholder='Enter DOB' className='border px-2 rounded py-1 w-full border-gray-300 outline-none' required/>
              </div>
              <div>
                <p className='mb-1'>Mobile No.:</p>
                <input type="number" name='mobile' onChange={handleChangeReg} placeholder='Enter Mobile No..' className='border px-2 w-full rounded py-1 border-gray-300 outline-none' required/>
              
              
             </div>
             </div>
              <button className='bg-green-400 text-white mt-5 text-center rounded  font-bold cursor-pointer shadow-lg hover:bg-green-500 duration-200 hover:text-[17px] hover:shadow-green-600/50 mb-2 md:w-1/2 w-full py-2'><div>
                Register
              </div></button>
             <div >
                <p className=''>If you have Allredy Register then <a href="#" onClick={toggleLR} className='text-blue-500 underline font-semibold'>click here to login</a> </p>
              </div>
          </form>
        </div>
}
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Login