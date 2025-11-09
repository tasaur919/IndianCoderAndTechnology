import React from 'react'
import { Link } from 'react-router-dom'

function DevtoolLeftBar() {
  return (
    <div>
        <div className="flex flex-col justify-center items-center py-10 pt-20 md:pt-10 gap-8">
            <Link
              to={"/devtools"}
              className="font-bold rounded-lg cursor-pointer w-full text-center hover:scale-[1.05]  hover:shadow-gray-400/50 hover:bg-gray-500 shadow-lg duration-200 bg-gray-600 py-1.5 px-3"
            >
              Back to Home
            </Link>
            <div className="flex flex-col gap-6 list-none">
              <Link to={'/devtools/gradientgenerate'} className="hover:text-blue-500 cursor-pointer hover:bg-gray-600 rounded-lg px-4 hover:text-[17px] hover:font-semibold py-1 w-fit duration-200">
                {" "}
                Gradient Generate
              </Link>
              <Link to={"/devtools/avatargenerate"} className="hover:text-blue-500 cursor-pointer hover:bg-gray-600 rounded-lg px-4 hover:text-[17px] hover:font-semibold py-1 w-fit duration-200">
                Avatar Generate{" "}
              </Link>
              <Link to={"/devtools/freestockimage"} className="hover:text-blue-500 cursor-pointer hover:bg-gray-600 rounded-lg px-4 hover:text-[17px] hover:font-semibold py-1 w-fit duration-200">
                Free Stock Image
              </Link>
              {/* <li className="hover:text-blue-500 cursor-pointer hover:bg-gray-600 rounded-lg px-4 hover:text-[17px] hover:font-semibold py-1 w-fit duration-200">
                Task Planner
              </li> */}
              <Link to={'/devtools/dummydata'} className="hover:text-blue-500 cursor-pointer hover:bg-gray-600 rounded-lg px-4 hover:text-[17px] hover:font-semibold py-1 w-fit duration-200">
                Dummy JSON Generator
              </Link>
              {/* <Link to={'/devtools/photoeditor'} className="hover:text-blue-500 cursor-pointer hover:bg-gray-600 rounded-lg px-4 hover:text-[17px] hover:font-semibold py-1 w-fit duration-200">
                Photo Editor
              </Link> */}
              <li className="hover:text-blue-500 cursor-pointer hover:bg-gray-600 rounded-lg px-4 hover:text-[17px] hover:font-semibold py-1 w-fit duration-200">
                Video Player
              </li>
            </div>
          </div>
         {/* for mobile */}
          
    </div>
  )
}

export default DevtoolLeftBar