import ColorLensIcon from '@mui/icons-material/ColorLens';
import Face2Icon from '@mui/icons-material/Face2';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DataObjectIcon from '@mui/icons-material/DataObject';

 const tools = [
    {
      name: "Gradient Generator",
      desc: "Generate and copy beautiful CSS and Tailwind gradients instantly",
      icon: <ColorLensIcon fontSize="large" className="text-orange-500 mr-5 bg-red-200 rounded-lg"/>,
      link: "/devtools/gradientgenerate",
      bg:"bg-[linear-gradient(123deg,_#c28c71,_#6a13ed,_#e81414)]",
      complete:"Completed",
    },
    {
      name: "Avatar Generator",
      desc: "Free online Avatar Generator. Create Male ,Female,Cartoon,Botts and Pixel etc.",
       icon: <Face2Icon fontSize="large" className="text-amber-200 mr-5  rounded-lg"/>,
      link: "/devtools/avatargenerate",
      bg:"bg-[conic-gradient(from_18deg,_#331057,_#ae5393,_#322d3e)]",
      complete:"Completed",
    },
    {
      name: "Free Stock Image",
      desc: "Find hogh-quality free stock images and use in your websites",
      icon: <CameraAltIcon fontSize="large" className="text-blue-500 mr-5  rounded-lg"/>,
      link: "/devtools/freestockimage",
      bg:"bg-[radial-gradient(circle,_#ae0951,_#492b21,_#3c4947)]",
      complete:"Completed",
    },
    // {
    //   name: "Task Planner",
    //   desc: "Plan, organize, and manage your daily tasks efficiently with aou Task Planner",
    //   // icon: <CropSquareIcon fontSize="large" className="text-blue-500 bg-blue-200 rounded-lg" />,
    //   link: "/devtools/taskplanner",
    // },
    {
      
      name: "Dummy JSON Generator",
      desc: "Find high-quality free stock images and use in your websites",
      icon: <DataObjectIcon fontSize="large" className="text-red-500 mr-5  rounded-lg"/>,
      link: "/devtools/dummydata",
      bg:"bg-[linear-gradient(94deg,_#98c985,_#3fa273,_#9d97b1)]",
      complete:"Completed",
    },
    // {
      
    //   name: "Photo Editor",
    //   desc: "Photo Edit high-quality images and use any personal work",
    //   icon: <CameraAltIcon fontSize="large" className="text-blue-500 mr-5  rounded-lg"/>,
    //   link: "/devtools/photoeditor",
    //   // bg:"bg-[linear-gradient(94deg,_#98c985,_#3fa273,_#9d97b1)]",
    //   complete:"Completed",
    // },





    
  ];

  export default tools;