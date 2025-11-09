import React from 'react'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailIcon from '@mui/icons-material/Email';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className=' py-8  shadow-lg items-center '>
        <div className="row grid grid-cols-2 md:grid-cols-4 gap-5 py-10 px-2 justify-between border-t border-b border-gray-600 ">
            <div className='col1 flex flex-col gap-3'>
                <h1 
                className='text-4xl font-bold bg-linear-to-l from-purple-500 via-pink-400 to-pink-500 bg-clip-text text-transparent'>Indian Coder <span className='text-2xl'>&</span> Technology</h1>
                <p className='text-[16px] py-2 text-gray-400'>Learn MERN, DevOps, Cloud & Full Stack with real-world projects, placement support, and certifications.</p>
                <div className='flex flex-row gap-6 items-center justify-center '>
                    <Link target='_blank' to={'https://t.me/tasauvar1'}><TelegramIcon fontSize='large' className='text-blue-400 hover:text-lg hover:text-blue-500'/></Link>
                    <Link target='_blank' to={'https://www.linkedin.com/in/tasauvar-ansari-431107273/'}><LinkedInIcon fontSize='large' className='text-blue-500 hover:text-blue-600'/></Link>
                    <Link target='_blank' to={'https://www.instagram.com/funny15700?igsh=eTZsZ3MyMDNvMWN3'}><InstagramIcon fontSize='large' className='text-orange-400 hover:text-orange-600' /></Link>
                    <Link target='_blank' to={'https://www.youtube.com/@indiancoder7869'}><YouTubeIcon fontSize='large' className='text-red-500 hover:text-red-700'/></Link>
                </div>
            </div>
            <div className='col2 ml-5 flex flex-col gap-3'>
                    <h1 className='font-bold text-2xl'>Explore</h1>
                    <Link className='hover:text-[15px] duration-200 hover:text-blue-500'>MERN Stack</Link>
                    <Link className='hover:text-[15px] duration-200 hover:text-blue-500'>DevOps</Link>
                    <Link className='hover:text-[15px] duration-200 hover:text-blue-500'>Cloud</Link>
                    <Link className='hover:text-[15px] duration-200 hover:text-blue-500'>Testimonials</Link>
            </div>
            <div className="col3 flex flex-col gap-3">
                 <h1 className='font-bold text-2xl'>Policies</h1>
                 <Link to={"/privacypolicy"} className='flex gap-1.5 hover:text-[15px] duration-200 hover:text-blue-500'><VerifiedUserIcon/>Privacy Policy</Link>
                 <Link to={"/refundpolicy"} className='flex gap-1.5 hover:text-[15px] duration-200 hover:text-blue-500'><AutorenewIcon/>Refund Policy</Link>
                 <Link to={"/termsandconditions"} className='flex gap-1.5 hover:text-[15px] duration-200 hover:text-blue-500'><LocalLibraryIcon/>Terms & Conditions</Link>
            </div>
            <div className="col4 flex flex-col gap-3">
               <h1 className='font-bold text-2xl'>Contact</h1>
               <Link className='flex gap-1.5 hover:text-[15px] duration-200 hover:text-blue-500'><EmailIcon/>support@indiancoder.com</Link>
               <Link className='hover:text-[17px] duration-200 hover:text-blue-500'>Contact Page<ArrowForwardIcon/></Link>
               
            </div>

        </div>
            <div className='flex flex-row justify-center py-5'>
 <p>&copy; 2026 Indian Coder . All rights reserved .</p>
             </div>
             
    </div>
  )
}

export default Footer