import React, { useState } from 'react'
import { Htmltopics } from '../Data/Data'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

function Tutorials() {
  const [openMenu,setOpenMenu]=useState(false)
  const [selectedTopic,setSelectedTopic]=useState("HTML")
  console.log(Htmltopics);
  const current=Htmltopics[selectedTopic];
  return (
     <div className="flex min-h-screen mt-20 bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-[300px] hidden md:block  bg-gray-800 p-5 border-r border-gray-700">
        <h2 className="text-2xl font-bold mb-4">Tutorials</h2>
        <ul className="space-y-3">
          {
           Object.keys(Htmltopics).map((topic)=>(
              <li className={`hover:text-blue-400 cursor-pointer px-6 rounded-lg ${selectedTopic===topic?" text-blue-400 text-[20px]":" text-[16px"}`} key={topic} onClick={()=>setSelectedTopic(topic)}>{topic}</li>
           ))
          }
          {/* <li className="hover:text-blue-400 cursor-pointer">HTML</li>
          <li className="hover:text-blue-400 cursor-pointer">CSS</li>
          <li className="hover:text-blue-400 cursor-pointer">JavaScript</li>
          <li className="hover:text-blue-400 cursor-pointer">React</li>
          <li className="hover:text-blue-400 cursor-pointer">Node.js</li>
          <li className="hover:text-blue-400 cursor-pointer">MongoDB</li> */}
        </ul>
      </div>

      {/* for mobile */}
      <div className="fixed z-1 top-22 left-5 md:hidden flex  border-r border-gray-700">
        <button onClick={()=>setOpenMenu(!openMenu)}>
        {
          openMenu?"":<DragIndicatorIcon fontSize='large'/>
        }
         </button> 
        {
          openMenu&&(
            <div className='absolute left-0 top-1  bg-gray-600 rounded-lg z-50' >
              <button onClick={()=>setOpenMenu(false)} className='absolute right-4 top-2 text-2xl'>X</button>
              <ul className="space-y-3 w-full py-8 pt-12 bg-gray-600" onClick={()=>setOpenMenu(!openMenu)}>
                {
                 Object.keys(Htmltopics).map((topic)=>(
              <li  className={`hover:text-blue-400 cursor-pointer text-wrap px-6 rounded-lg ${selectedTopic===topic?" text-blue-400 text-[20px]":" text-[16px"}`} key={topic} onClick={()=>setSelectedTopic(topic)}>{topic}</li>
           ))
          }
              </ul>
            </div>
           )
        }
      </div>


      {/* Main Content */}
      <div className="flex flex-col p-10 justify-top items-center">
        <div className=''>
          <div className='flex flex-col justify-center items-center'>
        <h1 className="text-3xl font-bold mb-5">Welcome to Tutorials</h1>
        <p className="text-gray-300 flex flex-col gap-2">
          <span className='text-2xl font-semibold'>Programming & Web Development Tutorials</span>
           <span>Download Video Related Source Codes & Notes</span>
        </p>
        </div>
        {/* Example content area */}
        <div className="mt-10 border border-gray-700 rounded-lg p-5">
          <h2 className="text-2xl font-semibold mb-3">{current.title}</h2>
          <span>Description:</span>
          <p className="text-gray-400 py-4">
            {current.description}
          </p>
          <span>Example:</span>
          <pre className='whitespace-pre-wrap mt-3 text-gray-400'>
            {current.examples.join("\n")}
          </pre>
        </div>
        <div className="contents">
           {/* write content here */}
           <p className='text-2xl mt-10'>Some Information About : {selectedTopic}</p>
           <p className='pt-6 text-gray-300 whitespace-pre-wrap'>
            {current.content.join("\n")}
           </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Tutorials