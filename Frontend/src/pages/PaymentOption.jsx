import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddCardIcon from '@mui/icons-material/AddCard';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import RefreshIcon from '@mui/icons-material/Refresh';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function PaymentOption() {
    const [showQr,setShowQr]=useState(false)
    const location=useLocation()
    const navigate=useNavigate()
    const price=location.state?.price || "7000"

  const upiLink = `upi://pay?pa=indiancoder8081-1@okhdfcbank&pn=Tasauvar%20Ansari&am=${price}&cu=INR`;
// const intentLink = `intent://pay?pa=indiancoder8081-1@okhdfcbank&pn=Tasauvar%20Ansari&am=${price}&cu=INR#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end`;


//     const upiLink = `tez://upi/pay?pa=indiancoder8081-1@okhdfcbank&pn=${encodeURIComponent(
//     "Tasauvar Ansari"
//   )}&am=${price}&cu=INR`;

  const handlePay = () => {
    window.location.href = upiLink;
  };

  // Generate QR Code using the API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
    upiLink
  )}`;
  return (
    <div className='min-h-screen mt-28 px-5 md:mt-28 flex flex-col justify-top items-center w-full'>
        {!showQr ?
        <div>
             <div className=" flex flex-col justify-center items-center">
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
        <div className=' text-center flex flex-col gap-10'>
            <h1 className='mt-10 text-4xl font-bold bg-linear-to-r from-red-400 via-orange-300 to-amber-500 text-transparent bg-clip-text'>Choose Payment Methods</h1>
         <div onClick={()=>setShowQr(true)} className='border hover:bg-gray-600 shadow-lg hover:shadow-gray-500/50 hover:text-[18px] duration-200 rounded-lg border-gray-300 px-8 py-6'>

                 <button className='font-semibold' >
                   <SensorOccupiedIcon className='mr-4'/> Pay with UPI/BHIM
                 </button>
         </div>
         <div onClick={()=>setShowQr(true)} className='border hover:bg-gray-600 shadow-lg hover:shadow-gray-500/50 hover:text-[18px] duration-200 rounded-lg border-gray-300 px-8 py-6'>

                 <button className='font-semibold' >
                   <AccountBalanceIcon className='mr-4'/> Pay with Netbacking
                 </button>
         </div>
         <div onClick={()=>setShowQr(true)} className='border hover:bg-gray-600 shadow-lg hover:shadow-gray-500/50 hover:text-[18px] duration-200 rounded-lg border-gray-300 px-8 py-6'>

                 <button className='font-semibold' >
                   <AddCardIcon className='mr-2 md:mr-10'/> Pay with Debit/Credit
                 </button>
         </div>

                 <Link to={'/payment'} className='font-semibold'>
<div className='border hover:bg-gray-600 shadow-lg hover:shadow-gray-500/50 hover:text-[18px] duration-200 rounded-lg border-gray-300 px-8 py-6'>

                  <ArrowBackIcon fontSize='medium' className='mr-6 duration-200'/>  BACK
         </div>
                 </Link>


         <div className="flex mt-5 md:mt-3 flex-col md:flex-row justify-around items-center gap-3 md:gap-20">
        <p className="text-green-400"><VerifiedUserIcon fontSize="normal mr-2"/>100% Secure Payment</p>
        <Link to={'#'} className="text-blue-400"><RefreshIcon fontSize="normal  mr-2"/>Refund policy</Link>
      </div>
         </div>
         </div>
:
        <div className='flex flex-col justify-center items-center gap-5'>
          <h1 className='text-[22px] font-semibold'>Scan to Pay {price}</h1>
          <img src={qrCodeUrl} alt="UPI QR Code"  className='w-[250px]'/>
          <p className="mt-2 text-gray-300">UPI ID: indiancoder8081-1@okhdfcbank</p>
          <button
        onClick={handlePay}
        className="mt-5 w-full bg-green-500 px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
      >
        Pay with Google Pay
      </button>
      <button 
        onClick={()=>setShowQr(false)}
        className="mt-5 bg-gray-500 px-6 py-2 rounded-lg w-full font-semibold hover:bg-gray-600 transition"
      >
        <ArrowBackIcon fontSize='medium' className='mr-6 duration-200'/> Back
      </button>
          </div>
}
    </div>
  )
}

export default PaymentOption