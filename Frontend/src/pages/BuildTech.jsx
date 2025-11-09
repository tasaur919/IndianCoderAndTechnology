import React from 'react'

function BuildTech() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
        <Comp title='FRONTEND' items={['React','Next.js','TypeScrip','JavaScript','Microfrontend']}/>
        <Comp title='BACKEND' items={['Node.js','Express.js','Encryption','OTP Auth','Redis',]}/>
        <Comp title='DEVOPS & INFRA' items={['Docker','AWS','Render','Netlify','Monorepo',]}/>
        <Comp title='MESSAGING & TESTING' items={['Kafka','RabbitMQ','Load Testing']}/>
        <Comp title='DATABASE' items={['MongoDB','MySQL','PostgreSQL']}/>
        <Comp title='ADVANCED TOOLING' items={['npm','CLI Development','Pipeline Dev','Framwork Dev']}/>

    </div>
  )
}

export default BuildTech;


export const Comp=({title,items})=>{
    return(
    <div className='border border-gray-600  bg-linear-to-tl from-[#065e21] to-[#3c874e] via-[#140951] shadow-lg hover:shadow-gray-600/50 hover:bg-gray-700 px-10 py-8 rounded-lg hover:scale-[1.05] transition-transform duration-300 '>
            <h1 className='text-2xl font-semibold bg-linear-to-r from-pink-300 via-gray-700 to-red-300  text-center rounded-lg py-1.5'>{title}</h1>
            {
                items.map((item,index)=>(
                    
                 <span className='border rounded-lg mt-4 grid grid-cols-1  border-gray-600 over:bg-gray-600 py-1 px-6 text-[20px]' key={index}>{item}</span>
                
              ))
            }
        
        </div>
    )
}