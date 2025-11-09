import React, { useEffect, useState } from "react";
import DevtoolLeftBar from "./DevtoolLeftBar";
import { Link } from "react-router-dom";
 import DownloadIcon from '@mui/icons-material/Download';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import avatars from "../Data/avatar";
import { toast, ToastContainer } from "react-toastify";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

function AvtarGenerator() {
  const [openMenu,setOpenMenu]=useState(false)
    const [src,setSrc]=useState(null)
    const [option,setOption]=useState('male')
    // const [url,setUrl]=useState("nll")

const optionChange=(e)=>{
     const value=e.target.value
     
     setOption(value)
    console.log(value);
    
     
}

    const  generate=()=>{
      const obj= avatars.find((item)=>item.value===option)
    //   console.log(obj.url);
    if(option==='real male' || option==='real female' ){
           const randomValue=Math.floor(Math.random()*100)
           const imageURL=`${obj.url}/${randomValue}.jpg`
           console.log(imageURL);
           
           setSrc(imageURL)
        //    setUrl(imageURL)
    }else{

        const uniqueValue=Date.now()
        const imageUrl=`${obj.url}${uniqueValue}`
        console.log(imageUrl);
        setSrc(imageUrl)
        // setUrl(imageUrl)
    }
    }
const download=(url)=>{
    const a=document.createElement("a")
    a.href=url;
    a.download=`${Date.now()}.jpg`
    a.click()
    a.remove()
}

const copied=(url)=>{
  navigator.clipboard.writeText(url)
  toast.success("Avatar Link copied!",{position:"top-center"})
}

    useEffect(()=>{
        generate();
        
    },[option])

  return (
    <div className="min-h-screen mt-24 w-full md:mt-22">
      <div className="flex flex-row">
        <div className="md:w-[280px] min-h-screen  justify-center items-center px-4 md:block hidden bg-gray-700 border-gray-500 border ">
          <DevtoolLeftBar />
        </div>
        {/* for mobile */}
        <div className="md:hidden fixed top-22 z-1 left-4">
          <button
           onClick={()=>setOpenMenu(!openMenu)}
           className=" "
          >
            {openMenu?"":<DragIndicatorIcon fontSize="large"/>}

          </button>
          {
            openMenu&&(
                <div className="w-full rounded-r-lg bg-gray-500 min-h-screen">
                    <button onClick={()=>setOpenMenu(!openMenu)} className="absolute bg-amber-500 cursor-pointer  font-semibold hover:bg-amber-600 hover:text-white rounded-lg px-2 py-1 mb-4 right-2 top-8 hover:scale-110 transition-transform duration-200">CLOSE</button>
                    <DevtoolLeftBar/>
                </div>
            )
          }
        </div>

        <div className="rightside w-full bg-gray-600 px-6 py-12 justify-center items-center flex ">
          <div className="flex flex-col gap-10 ">
            <div className=" flex flex-col justify-center items-center">
              <span className="text-[20px]">
                <Link to={"#"} className="text-4xl font-semibold flex flex-col">
                  {" "}
                  <span className="bg-linear-to-l from-orange-400 via-blue-400 to-red-400 bg-clip-text text-transparent">
                    {" "}
                    Indian Coder{" "}
                  </span>{" "}
                  <span className="text-[16px] ml-5 text-blue-200">
                    & Technology
                  </span>
                </Link>
              </span>
            </div>
            <div className=" border border-gray-500 rounded-lg px-10 flex justify-center items-center flex-col gap-6  py-10 ">
              
                <img src={src} alt="logo"  className="w-[150px] h-[150px] text-center rounded-full object-cover border-2" />
             
              <div className="flex flex-col text-center py-5">
                <h1 className="text-2xl font-semibold">Avatar Generator</h1>
                <p className="py-2">Generate Male,Female, Cartoon,or Realistic avatars.</p>
              </div>
              <div className="flex flex-col w-full space-y-3">
                <select  className=" px-5 border py-2 rounded outline-none" value={option} onChange={optionChange}>
                 {
                    avatars.map((item,index)=>(
                          <option key={index} value={item.value} className="text-black">{item.label}</option>
                    ))
                 }
                  
                </select>
                <div  className=" px-5 border py-2 rounded outline-none">
                    {src}
                    
                </div>
              </div>
              
              
              <div className="flex space-x-4">
                <button className="bg-sky-300 rounded-lg py-1 px-3 cursor-pointer hover:bg-sky-600 hover:shadow-sky-300 shadow-lg duration-200 transition-transform hover:scale-[1.05]" onClick={generate}><ArrowOutwardIcon/>Change</button>
                <button className="bg-green-500 rounded-lg py-1 px-3 cursor-pointer hover:bg-green-600 hover:shadow-green-300 shadow-lg duration-200 transition-transform hover:scale-[1.05]" onClick={()=>download(src)}><DownloadIcon/>Download</button>
                <button className="bg-orange-500 rounded-lg py-1 px-3 cursor-pointer hover:bg-orange-600 hover:shadow-red-300 shadow-lg duration-200 transition-transform hover:scale-[1.05]" onClick={()=>copied(src)}>Copy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default AvtarGenerator;
