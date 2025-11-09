// import React, { useState } from "react";
// import DevtoolLeftBar from "./DevtoolLeftBar";
// import { Upload } from "lucide-react";
// // import {ReactPhotoEditor} from 'react-photo-editor'
// import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
// const PhotoEditor1 = React.lazy(() => import("react-photo-editor"));

// function PhotoEditor() {
//     const [file,setFile]=useState(null)
//     const [open,setOpen]=useState(false)
//     const [openMenu,setOpenMenu]=useState(false)
//  const choosePhoto=()=>{
//     const input=document.createElement("input")
//     input.type="file"
//     input.accept="image/*"
//     input.click()
//     input.onchange=()=>{
//         const file=input.files[0];
//         console.log(file);
//         setFile(file)
//         setOpen(true)
//     }
//  }
//  const handleClose=()=>{
//     setFile(null)
//     setOpen(false)
//  }

//  const onSaveImage=(editPhoto)=>{

// const url=URL.createObjectURL(editPhoto)
// const a=document.createElement("a")
// a.href=url
// a.download=`${Date.now().png}`
// a.click()

//  }

//   return (
//     <div className=" my-44 md:my-0 w-full md:mt-22 ">
//       <div className="flex flex-row min-h-[50%] md:min-h-screen">
//         <div className="md:w-[280px] min-h-screen  justify-center items-center px-4 md:block hidden bg-gray-700 border-gray-500 border ">
//           <DevtoolLeftBar />
//         </div>
//         {/* for mobile */}
//         <div className="md:hidden fixed top-22 z-1 left-4">
//           <button
//            onClick={()=>setOpenMenu(!openMenu)}
//            className="bg-gray-300 "
//           >
//             {openMenu?"":<DragIndicatorIcon fontSize="large"/>}

//           </button>
//           {
//             openMenu&&(
//                 <div className="w-full rounded-r-lg bg-gray-500 min-h-screen">
//                     <button onClick={()=>setOpenMenu(!openMenu)} className="absolute my-4 right-4 top-8">CLOSE</button>
//                     <DevtoolLeftBar/>
//                 </div>
//             )
//           }
//         </div>


//         <div className="rightside w-full  flex justify-center items-center">
//           <div onClick={choosePhoto} className="bg-gray-500 rounded-lg py-4 md:w-6/12 w-full flex flex-col gap-2 justify-center items-center shadow-lg hover:scale-110 transition-transform duration-200 cursor-pointer">
//            <Upload className="w-16 h-16"/>
//            <h1 className="text-4xl font-bold">Choose an image</h1>
//           </div>
//           <div className="text-black">
//           <PhotoEditor1 
//              open={open}
//              file={file}
//              onClose={handleClose}
//              onSaveImage={onSaveImage}
             
//           />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PhotoEditor;
