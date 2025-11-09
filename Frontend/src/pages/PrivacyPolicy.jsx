import React from 'react'

function PrivacyPolicy() {
  return (
   <div className="min-h-screen mt-28 px-5 md:mt-28  w-full flex flex-col justify-top items-left gap-6">
         <div className='flex flex-col gap-2 '>
            <h1 className='text-2xl font-semibold'>Privacy Policy</h1>
            <p className='text-[20px] text-gray-300'>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from codingott.com</p>

         </div>

         <div className='flex flex-col gap-2 '>
            <h1 className='text-2xl font-semibold'>Personal information</h1>
            <p className='text-[20px] text-gray-300'>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as Device Information.</p>

         </div>

         <p className='flex flex-col gap-2 '>We collect Device Information using the following technologies</p>
     <div className='flex flex-col gap-5 '>
        <li className='text-[20px] font-semibold'>Cookies : <span className='font-thin'>Cookies are text files with small pieces of data — like a username and password — that are used to identify your computer as you use a computer network.</span></li>

        <li className='text-[20px] font-semibold'>Local Storage : <span className='font-thin'>LocalStorage is a data storage type of web storage. This allows the JavaScript sites and apps to store and access the data without any expiration date.</span></li>
        <li className='text-[20px] font-semibold '>Session Storage : <span className='font-thin'>The sessionStorage object stores data only for a session. It means that the data stored in the sessionStorage will be deleted when the browser is closed.</span></li>
    
        <p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:</p>
        <div className='px-4 text-[19px]'>
            <li>Communicate with you</li>
            <li>Screen our orders for potential risk or fraud</li>
            <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services</li>
        </div>
        <div className=''>
            <p className='py-2 font-thin pb-3'>We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns). We use your account information that we collect generally to generate statistics for you, and provide personalized roadmaps. Additionally, we use this information to:</p>
            <li className='px-2 text-[19px]'>Communicate with you</li>
            <li className='px-2 text-[19px]'>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services</li>
        </div>

        <div className='flex flex-col gap-2 pb-10'>
            <h1 className='text-2xl font-semibold'>Contact us</h1>
            <p className='text-[20px] text-gray-300'>If you have questions, or if you would like to make a complaint, please contact us by e‑mail at <br />indiancoder8081@gmail.com</p>

         </div>
     </div>


    </div>
  )
}

export default PrivacyPolicy