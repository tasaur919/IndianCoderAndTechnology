import React, { useState } from "react";
import logo from "../assets/logo2.jpg";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
// import { useAuth } from "../context/AuthContext";
function NavBar() {
  const navigate=useNavigate();
  const [option, setOption] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  //for login then open Devtools
//  const {isLoggedIn,login,logout}=useAuth();
//  React.useEffect(()=>{
//   if(!isLoggedIn){
//     navigate('/');
//   }

//  },[isLoggedIn,navigate])

  return (
    <>
    
      <div 
      className="fixed z-1 w-11/12 flex shadow-lg  flex-row justify-between items-center bg-linear-to-r  from-gray-600 to-gray-800 border-gray-800 rounded py-1 px-4 ">
        <Link
          to={"/"}
          className="flex flex-row  text-center items-center space-x-4 py-2"
        >
          <img
            src={logo}
            alt="Logo!"
            className="w-[50px] h-[50px] rounded-full object-cover fill-blue-600"
          />
          <p className="text-3xl flex flex-col md:text-2xl  bg-linear-to-tl font-bold   from-blue-200 via-red-700 to-blue-400 bg-clip-text text-transparent">
           <span> Indian Coder</span>
            <span className="text-[12px] text-blue-400">& Technology</span>
          </p>
        </Link>
        <div className="flex items-center">
          <div className="md:flex-row hidden md:flex gap-3">
            <Link
              to={"/"}
              className="hover:text-blue-400 transition-transform duration-200  hover:bg-gray-700 px-2 rounded "
            >
              Home
            </Link>
            <Link
              to={"/tutorials"}
              className="hover:text-blue-400 transition-transform duration-200  hover:bg-gray-700 px-2 rounded "
            >
              Tutorials
            </Link>
            <div className="relative group">
              <div className="hover:text-blue-500">
                Placements
                <KeyboardArrowDownIcon className="transition-transform duration-200 group-hover:rotate-180" />
              </div>
              <div className="absolute left-0 hidden bg-gray-700 group-hover:block  border border-gray-600 w-58 px-5  py-2 rounded">
                <Link
                  to={"/placements/placement"}
                  className="hover:text-blue-400 transition-transform duration-200 block hover:bg-gray-700 px-2 rounded "
                >
                  Placement Assistance Webinor
                </Link>
                <Link
                  to={"/placements/report"}
                  className="hover:text-blue-400 transition-transform duration-200 block py-3 hover:bg-gray-700 px-2 rounded"
                >
                  Placement Report
                </Link>
                <Link
                  to={"/placements/interview"}
                  className="hover:text-blue-400 transition-transform duration-200 block hover:bg-gray-700 px-2 rounded"
                >
                  Placement Interviews
                </Link>
              </div>
            </div>
            <Link
              to={"/coursereviews"}
              className="hover:text-blue-400 transition-transform duration-200  hover:bg-gray-700 px-2 rounded "
            >
              Course reviews
            </Link>

            
            <Link
              // to={isLoggedIn ? "/devtools" : "/login"}
              to={'/devtools'}
              className="hover:text-blue-400 transition-transform duration-200  hover:bg-gray-700 px-2 rounded "
            >
              Devtools
            </Link>
            
            <Link
              to={"/login"}
              className="hover:text-blue-400 transition-transform duration-200  hover:bg-gray-700 px-2 rounded "
            >
              Login
            </Link>
          </div>
          <button onClick={toggleMenu} className="md:hidden flex">
            {!menuOpen ? (
              <MenuIcon fontSize="large" />
            ) : (
              <CloseIcon fontSize="large" />
            )}
          </button>
        </div>
      </div>
      {/*  for mobiles         */}
      <div className="md:hidden flex ">
        <div className="">
          {menuOpen && (
            <>
              <div className="top-18  text-[20px] h-screen fixed flex flex-col gap-5 left-0 px-10 bg-gray-700 shadow-2xl z-100  w-9/12 py-10 rounded-lg border">
                {/* <button onClick={toggleMenu} className="absolute right-1 pr-4 font-bold">
              {!menuOpen ? <MenuIcon/>:<CloseIcon fontSize="large"/>}
             </button> */}
                <Link
                  to={"/"}
                  className="hover:text-blue-400 transition-transform duration-200  hover:bg-gray-700 px-2 rounded "
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  to={"/tutorials"}
                  className="hover:text-blue-400 transition-transform duration-200  hover:bg-gray-700 px-2 rounded "
                  onClick={toggleMenu}
                >
                  Tutorials
                </Link>
                <div className="relative group">
                  <div className="hover:text-blue-500">
                    Placements
                    <KeyboardArrowDownIcon className="transition-transform duration-200 group-hover:rotate-180" />
                  </div>
                  <div className="absolute bg-gray-700 left-0 hidden group-hover:block  border border-gray-600 w-58 px-5  py-2 rounded">
                    <Link
                      to={"/placements/placement"}
                      onClick={toggleMenu}
                      className="hover:text-blue-400 transition-transform duration-200 block hover:bg-gray-700 px-2 rounded "
                    >
                      Placement Assistance Webinor
                    </Link>
                    <Link
                      to={"/placements/report"}
                      onClick={toggleMenu}
                      className="hover:text-blue-400 transition-transform duration-200 block py-3 hover:bg-gray-700 px-2 rounded"
                    >
                      Placement Report
                    </Link>
                    <Link
                      to={"/placements/interview"}
                      onClick={toggleMenu}
                      className="hover:text-blue-400 transition-transform duration-200 block hover:bg-gray-700 px-2 rounded"
                    >
                      Placement Interviews
                    </Link>
                  </div>
                </div>
                <Link
                  to={"/coursereviews"}
                  onClick={toggleMenu}
                  className="hover:text-blue-400 transition-transform duration-200  hover:bg-gray-700 px-2 rounded "
                >
                  Course reviews
                </Link>
                <Link
                  to={"/devtools"}
                  onClick={toggleMenu}
                  className="hover:text-blue-400 transition-transform duration-200  hover:bg-gray-700 px-2 rounded "
                >
                  Devtools
                </Link>
                <Link
                  to={"/login"}
                  onClick={toggleMenu}
                  className="hover:text-blue-400 transition-transform duration-200  hover:bg-gray-700 px-2 rounded "
                >
                  Login
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    
    </>
  );
}

export default NavBar;
