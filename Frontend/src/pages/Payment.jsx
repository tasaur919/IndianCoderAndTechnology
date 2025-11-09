import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import RefreshIcon from '@mui/icons-material/Refresh';

import 'animate.css';

function Payment() {
  const [selectedPrice, setSelectedPrice] = useState("₹7000");
  
  const navigate=useNavigate()
  return (
    <div className="min-h-screen mt-28 px-5 md:mt-28  w-full flex flex-col justify-center items-center">
      <div className=" flex flex-col gap-3">
      <div className=" flex flex-col justify-center items-center animate__animated animate__backInLeft
      animate__delay-2s">
        <span className="text-[20px]">
          <Link to={"#"} className="text-4xl font-semibold flex flex-col">
            {" "}
            <span className="bg-linear-to-l from-orange-400 via-blue-400 to-red-400 bg-clip-text text-transparent ">
              {" "}
              Indian Coder{" "}
            </span>{" "}
            <span className="text-[16px] ml-5 text-blue-200">& Technology</span>
          </Link>
        </span>
      </div>
      <div className="flex flex-col text-center py-10">
        <h1 className="text-5xl font-bold mb-2">Mern Stack To Millions</h1>
        <p className="text-gray-300 text-[20px]">
          The complete MERN stack course to build real-world apps ready for
          production, jobs, and startups.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  w-ull gap-20 w-full   rounded-lg px-8 py-6">
        <ChooseCourse
          title="2 Years Access"
          device="2 Device login access"
          price="₹7,000"
          onSelect={() => setSelectedPrice("₹7000")}
        />
        <ChooseCourse
          title="Lifetime Access"
          device="3 Device login access"
          price="₹10,000"
          onSelect={() => setSelectedPrice("₹10000")}
        />
      </div>

      <div className="border cursor-pointer w-full text-center py-2 rounded-lg shadow-lg hover:shadow-amber-500 bg-linear-to-l bg-amber-300 via-red-400 to-fuchsia-400 hover:text-[20px] duration-200" onClick={()=>navigate('/payment/qr',{state:{price:selectedPrice}})} >
        <button className="font-bold  cursor-pointer">
          {selectedPrice
            ? `Pay ${selectedPrice} with GooglePay or QRCode`
            : "choose a Course first"}
        </button>
      </div>
       <div className="border cursor-pointer w-full text-center py-2 rounded-lg shadow-lg hover:shadow-green-500 bg-green-400 hover:text-[20px] duration-200 mt-5">
        <Link target="_blank" to={'https://web.whatsapp.com/'} className="font-bold  cursor-pointer">
          Need Help? Chat on WhatsApp
        </Link>
      </div>
      <div className="border cursor-pointer w-full text-center py-2 rounded-lg shadow-lg hover:shadow-gray-500 bg-gray-500 hover:text-[20px] duration-200 mt-5">
        <Link target="_black" to={'https://web.whatsapp.com/'} className="font-bold  cursor-pointer">
          Logout from Account
        </Link>
      </div>

      <div className="flex mt-5 md:mt-3 flex-col md:flex-row justify-around items-center gap-3 md:gap-20">
        <p className="text-green-400"><VerifiedUserIcon fontSize="normal mr-2"/>100% Secure Payment</p>
        <Link to={'/refundpolicy'} className="text-blue-400"><RefreshIcon fontSize="normal  mr-2"/>Refund policy</Link>
      </div>
      </div>
    </div>
  );
}

export default Payment;

export const ChooseCourse = ({ title, price, device ,onSelect}) => {
  return (
    <div onClick={onSelect} className="flex flex-col gap-2 border rounded-lg px-10 py-6 duration-200 shadow-lg hover:shadow-gray-400/50 hover:bg-gray-600 hover:text-[14px] cursor-pointer">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="py-2 ">
        <span className="mr-4">
          <ImportantDevicesIcon className="text-amber-200"/>
        </span>
        {device}
      </p>
      <p className="text-3xl font-bold text-green-500">{price}</p>
    </div>
  );
};
