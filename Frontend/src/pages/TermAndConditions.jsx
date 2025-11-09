import React from 'react'

function TermAndConditions() {
  return (
    <div className="min-h-screen mt-28 px-5 md:mt-28  w-full flex flex-col justify-top items-left gap-6">
         <div className='flex flex-col gap-2 '>
            <h1 className='text-2xl font-semibold'>Terms and Conditions</h1>
            <p className='text-[20px] text-gray-300'>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from codingott.com</p>

         </div>

         <div className='flex flex-col gap-2 '>
            <h1 className='text-2xl font-semibold'>Personal information</h1>
            <p className='text-[20px] text-gray-300'>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as Device Information.</p>

         </div>
         <div className='flex flex-col gap-2 '>
            <h1 className='text-2xl font-semibold'>We collect Device Information using the following technologies:</h1>
            
            <div className='text-[20px] text-gray-300 w-full px-10'>
                <li>Cookies</li>
                <li>Local Storage</li>
                <li>Session Storage</li>
            </div>

         </div>

         <div className='flex flex-col gap-2 '>
            <h1 className='text-2xl font-semibold'>Order Information</h1>
            <p className='text-[20px] text-gray-300 w-full '>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:</p>
            <div className='text-[20px] text-gray-300 w-full px-10 py-3'>
                <li>Communicate with you</li>
                <li>Screen our orders for potential risk or fraud</li>
                <li>Provide you with information or advertising relating to our products or services</li>
            </div>

         </div>

         <div className='flex flex-col gap-2 '>
            <h1 className='text-2xl font-semibold'>Device Information</h1>
            <p className='text-[20px] text-gray-300 w-full '>We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns). We use your account information that we collect generally to generate statistics for you, and provide personalized roadmaps. Additionally, we use this information to:</p>
            <div className='text-[20px] text-gray-300 w-full px-10 py-3'>
                <li>Communicate with you</li>
                <li>Provide you with information or advertising relating to our products or services</li>
                
            </div>

         </div>
          <div className='flex flex-col gap-2 '>
            <h1 className='text-2xl font-semibold'>Contact us</h1>
            <p className='text-[20px] text-gray-300'>If you have questions, or if you would like to make a complaint, please contact us by e‑mail at</p>
            <a target='_blank' href='https://mail.google.com' className='text-[20px] text-blue-500'>indiancoder8081@gmail.com</a>

         </div>
    </div>
  )
}

export default TermAndConditions