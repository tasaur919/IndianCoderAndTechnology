import React, { useEffect, useState } from "react";
import DevtoolLeftBar from "./DevtoolLeftBar";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { ToastContainer, toast } from "react-toastify";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

function GradientGenerator() {
  const [openMenu,setOpenMenu]=useState(false)
  const [gradients, setGradients] = useState([]);
  const [num, setNum] = useState(12);
  const [type, setType] = useState("linear");

  const generateHexaCodeColor = () => {
    const rgb = 255 * 255 * 255;
    const random = Math.floor(Math.random() * rgb);
    const hexacode = random.toString(16);
    const colorHexa = hexacode.padStart(6, "0");
    return `#${colorHexa}`;
  };

  const generateGradient = () => {
    const colors = [];
    for (let i = 0; i < num; i++) {
      const col1 = generateHexaCodeColor();
      const col2 = generateHexaCodeColor();
      const col3 = generateHexaCodeColor();
      const degree = Math.floor(Math.random() * 360);
      const degString = `${degree}deg`;
      if (type === "linear") {
        colors.push({
          gradient: `linear-gradient(${degString},${col1},${col2},${col3})`,
          css: `background:'linear-gradient(${degString},${col1},${col2},${col3})'`,
          tailwind:`bg-[linear-gradient(${degString},_${col1},_${col2},_${col3})]`
        });
      }
      else if(type==='radial'){
        colors.push({
          gradient: `radial-gradient(circle,${col1},${col2},${col3})`,
          css: `background:'radial-gradient(circle ${col1},${col2},${col3})'`,
          tailwind:`bg-[radial-gradient(circle,_${col1},_${col2},_${col3})]`
        });
      }
      else{
        colors.push({
          // gradient: `conic-gradient(from ${degString} at center, ${col1},${col2},${col3})`,
          // css: `background:'conic-gradient(from ${degString} at center , ${col1},${col2},${col3})'`,
           gradient: `conic-gradient(${col1} ${degString} ${degString}, ${col2} ${degString} ${degString}, ${col3} ${degString} ${degString})`,
  css: `background: conic-gradient(${col1} ${degString} ${degString}, ${col2} ${degString} ${degString} ${col3} ${degString} ${degString});`,
  tailwind:`bg-[conic-gradient(from_${degString},_${col1},_${col2},_${col3})]`
        });
      }
      }
    
    setGradients(colors);
  };

  //for copy gradient code of taiwind and css
const onCopyTaiwind=(tailwind)=>{
     navigator.clipboard.writeText(tailwind)
    toast.success(`Gradient code copied!`, { position: "top-center" });
  }
  const onCopyCSS = (css) => {
    navigator.clipboard.writeText(css);
    toast.success(`Gradient code copied!`, { position: "top-center" });
  };



  useEffect(() => {
    generateGradient();
  }, [num, type]);

  return (
    <div className="min-h-screen mt-24 w-full md:mt-22">
      <div className="flex flex-row ">
        <div className="md:w-[280px] min-h-screen  justify-center items-center px-4 md:block hidden bg-gray-700 border-gray-500 border ">
          <DevtoolLeftBar />
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

        <div className="rightside w-full bg-gray-600 px-6 py-12">
          <div className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-2 bg-gray-500 py-5 rounded-md md:px-10">
            <div className="flex flex-row justify-center items-center">
              <span>
                <ColorLensIcon
                  fontSize="large"
                  className="text-orange-500 mr-2 bg-red-200 rounded-lg"
                />
              </span>
              <h1 className="text-3xl font-bold bg-linear-to-l from-orange-500 via-amber-400 to-pink-500 bg-clip-text text-transparent">
                Gradient Generator
              </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-8 mt-10 md:mt-0">
              <input
                type="number"
                value={num}
                onChange={(e) => setNum(e.target.value)}
                className="md:w-[90px] bg-gray-400 font-bold outline-none px-2 rounded-lg py-2"
              />
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="md:w-[90px] bg-gray-400 outline-none font-bold px-2 pr-2  rounded-lg py-2"
              >
                <option value="linear">Linear</option>
                <option value="radial">Radial</option>
                <option value="conic">Conic</option>
              </select>
              <button onClick={()=>generateGradient()} className="md:w-[90px] bg-linear-to-l shadow-lg hover:shadow-blue-500/50 from-blue-500 via-teal-400 to-blue-500 outline-none px-2 font-bold rounded-lg py-2 hover:text-[17px] duration-200">
                Refresh
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 py-10 ">
            {gradients.map((item, index) => (
              <div
                key={index}
                style={{ background: item.gradient}}
                className=" h-44 rounded-lg flex flex-col justify-between items-end"
              >
                <div className="flex  justify-end items-end  gap-2 p-1">
                <button
                  onClick={() => onCopyCSS(item.css)}
                  className="h-fit  bg-gray-500/60 rounded-lg p-1   right-3 bottom-3 cursor-pointer hover:bg-gray-600 text-xs"
                >
                  CSS
                </button>
                <button
                  onClick={() => onCopyTaiwind(item.tailwind)}
                  className=" h-fit bg-gray-500/60 rounded-lg p-1   right-12 bottom-3 cursor-pointer hover:bg-gray-600 text-xs"
                >
                  Tailwind
                </button>
                </div>
                </div>
              
            ))}
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default GradientGenerator;
