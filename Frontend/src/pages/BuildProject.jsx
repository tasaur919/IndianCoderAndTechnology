import React from 'react'

function BuildProject({heading,para ,src}) {
  return (
    <div className=''>
        <div className="flex flex-col gap-8 border-gray-400 border px-8 shadow-lg hover:shadow-gray-300/50 transition-transform duration-200 rounded hover:bg-gray-700 md:h-90 py-10  ">
            <div className='text-white rounded-lg  font-bold'>{src}</div>
            <h1 className='text-2xl font-bold'>{heading}</h1>
            <p className='text-gray-300 text-[20px] md:text-[17px] '>{para}</p>
        </div>

    </div>
  )
}

export default BuildProject