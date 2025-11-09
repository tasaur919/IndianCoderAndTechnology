import React, { useState } from "react";
import {Link}  from "react-router-dom";

import DevtoolLeftBar from "../components/DevtoolLeftBar";
import tools from '../Data/tools'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
function Devtools() {
  const [openMenu,setOpenMenu]=useState(false)
  

  return (
    <div className="min-h-screen mt-24 w-full md:mt-22">
      <div className="flex flex-row border border-gray-600 rounded-lg">
        <div className="md:w-[280px] min-h-screen  justify-center items-center px-4 md:block hidden bg-gray-700 border-gray-500 border ">
          <DevtoolLeftBar/>
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

        <div className="grid w-full  grid-cols-1 md:grid-cols-3 px-6 bg-gray-600">
          
          {
            tools.map((tool,index)=>(
              <ManyTools
              key={index}
              toolName={tool.name}
              desc={tool.desc}
              icon={tool.icon}
              link={tool.link}
              bg={tool.bg}
              complete={tool.complete}
              />
            ))
          }
         
          
        </div>
      </div>
    </div>
  );
}

export default Devtools;

export const ManyTools = ({toolName,desc,icon,link,bg,complete}) => {
  return (
    <div className="flex py-8   px-2">
      <div className={`relative flex flex-col  border border-gray-500 shadow-lg hover:shadow-gray-400 px-10 py-8  rounded-lg duration-200 hover:bg-gray-500 hover:text-[16px] hover:scale-[1.05] ease-in-out ${bg}`}>
        <Link to={link}>
        <p className="text-2xl font-semibold">
          <span>{icon}</span>
          {toolName}</p>
          
        <p className="pt-10 text-[20px] text-gray-200">{desc}</p>
        </Link>
        <div className="absolute bottom-5 right-3 "><span className="font-bold text-gray-200 px-3 py-2 ">{complete}</span></div>
      </div>
    </div>
  );
};
