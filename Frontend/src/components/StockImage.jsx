import React, { useEffect, useState } from 'react'
import DevtoolLeftBar from './DevtoolLeftBar'
import axios from 'axios'
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import DownloadIcon from '@mui/icons-material/Download';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';



const API_KEY="9ioDmG4fPxepFTAo639ufdhSAT0XrgtA1MnxFwtu2x9ptompOGrhLsVs"

function StockImage() {
    const [openMenu,setOpenMenu]=useState(false)
const [photos,setPhotos]=useState([])
const [loading,setLoading]=useState(false)
const [page,setPage]=useState(1)
const [query,setQuiry]=useState('flower')

    //"https://api.pexels.com/v1/search?query=people&pages=1&"
const fetchImage=async()=>{
try {
    setLoading(true)
    const options={
        headers:{
            Authorization:API_KEY
        }
    }

    //url from pexels.com 
    const res=await axios.get(`https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=9`,options)
    // console.log(res);
    setPhotos([
        ...photos,  //
        ...res.data.photos
    ])
    // console.log(res.data.photos);
    
    
} catch (error) {
    console.log(error);
    
}
finally{
    setLoading(false)
}
}

//load more photos
const loadMore=()=>{
    setPage(page+1)
}

//for searching images
const searchImage=(e)=>{
    e.preventDefault()
    const q=e.target[0].value.trim()
    setPhotos([])
    setQuiry(q)

}

useEffect(()=>{
    fetchImage()
},[page,query])

  return (
    <div className="min-h-screen mt-24 w-full md:mt-22">
       <div className='flex flex-row'>
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
         
         <div className='w-full bg-gray-400 px-6 md:px-8 py-12 flex flex-col justify-top items-center space-y-12'>
            <div className='flex flex-col md:px-12 md:gap-4 gap-6 text-center'>
                <h1 className='md:text-4xl text-3xl font-bold text-blue-500'>📷 Free Stock Images</h1>
                <p className='text-[20px]'>Find high-quality free stock images using the Pexels API. Perfect for frontend developers and designers to use in websites and apps.</p>
            </div>
            <form onSubmit={searchImage}>
               <div className='flex flex-row w-full px-12'>
                <input type="text" placeholder='Search image here...' className='bg-gray-500 border border-r-0 border-gray-700 rounded-l-md py-3 px-3 md:w-[400px] outline-none shadow-lg shadow-gray-300/50'/>
                <button className='py-3 px-4 bg-linear-to-tl from-blue-400 via-cyan-400 to-blue-500 rounded-r-lg cursor-pointer hover:scale-[1.05] shadow-lg hover:shadow-blue-400/50'>Search</button>
               </div>
            </form>
            {
                photos.length===0 && (
                      <p className='text-center text-gray-300 text-2xl'>Photos are not found!</p>
                )
            }
            <div className='w-full  grid grid-cols-1 md:grid-cols-3 gap-8 '>
                {
                    photos.map((item,index)=>(
                        <div key={index} className='border rounded border-gray-300 bg-gray-500 pb-1 shadow-lg hover:shadow-gray-200 hover:bg-gray-400'>
                            <img src={item.src.medium} alt={item.alt} className='object-cover h-[230px] w-full hover:scale-[1.05] transition-transform duration-300'/>
                            <div className='p-2 px-5'>
                            <p className='font-bold  py-3'>{item.photographer}</p>
                            
                        <a target='_black' href={item.src.original}  className='py-2 mt-3 block rounded-lg text-center bg-green-400 hover:scale-105 transition-transform duration-300'><DownloadIcon/>Download</a></div>
                        </div>
                    ))
                }
            </div>
           {
             loading &&
                <StarPurple500Icon fontSize='large' className='animate-spin'/>
           }
             {
                photos.length>0&&(
                    <button onClick={loadMore} className='bg-rose-500 font-bold text-center px-3 py-2 rounded-lg hover:scale-105 transition-transform duration-300'>Load more</button> 
                )
             }  
         </div>

       </div>
    </div>
  )
}

export default StockImage