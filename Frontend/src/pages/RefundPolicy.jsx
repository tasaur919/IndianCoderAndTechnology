import React from 'react'

function RefundPolicy() {
  return (
    <div className="pb-8 mt-28 px-5 md:mt-28  w-full flex flex-col justify-top items-left gap-6">
         <div className='flex flex-col gap-2 '>
            <h1 className='text-2xl font-semibold'>Refund Policy</h1>
            <p className='text-[20px] text-gray-300 pt-4'>At IndianCoder, we strive to provide high-quality, up-to-date content that meets industry standards. However, if you feel that a course you have purchased is outdated or does not meet current industry standards, you may request a refund.</p>

            <p className='text-[20px] text-gray-300 py-4'>We offer a full refund within 2 calendar days of your purchase. After this 2-day period, refund requests will not be accepted.</p>
            <div className='text-[20px] text-gray-300 '>
                <p className='text-[20px] text-gray-300 py-4'>Please note that refunds are only applicable under the following conditions:</p>
                <div className='px-10'>
                <li>The course content is outdated.</li>
                <li>The course does not align with current industry standards.</li>
                </div>
            </div>
          <p className='text-[20px] text-gray-300 pt-6'>If you meet these conditions and would like to request a refund, please contact us at</p>
            <a target='_blank' href='https://mail.google.com' className='text-[20px] text-blue-500'>indiancoder8081@gmail.com</a>
         </div>

    </div>
  )
}

export default RefundPolicy