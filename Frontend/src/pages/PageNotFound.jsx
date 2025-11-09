import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function PageNotFound() {
  return (
    <div className='my-30 flex justify-center items-center'>
        <div className='py-30 text-2xl text-gray-300'>
            404 | Page not Found !
            <h1 className='text-center pt-3'><Link to={'/'} className='text-[17px] underline text-blue-500 font-semibold'><ArrowBackIcon fontSize='medium' className='mr-3'/>Back to Home</Link></h1>
        </div>
    </div>
  )
}

export default PageNotFound