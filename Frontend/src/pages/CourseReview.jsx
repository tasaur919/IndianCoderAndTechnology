import React from "react";
import userlogo from "../assets/user.jpg";
function CourseReview() {
  return (
    <div className="min-h-screen mt-24 px-5 md:mt-28">
      <div>
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-center text-4xl font-bold  bg-linear-to-r from-pink-400 via-orange-400 to-red-500 text-transparent bg-clip-text">
            Course Reviews
          </h1>
          <p className="text-[20px] text-gray-300">
            Watch honest course reviews from real students. Discover ratings,
            feedback, and experiences to help you choose the right coding
            courses.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 mt-10 justify-center items-center md:items-left">
          {/* <VideoComp
            title="Amrita kumari"
            desc="mern stack to millions"
            src="{userlogo}"
          /> */}
          <VideoComp
            title="Shakil Ahmad"
            desc="mern stack to millions"
            src="https://www.youtube.com/watch?v=B6U2ICyPD_k"
            type="youtube"
            ratting='10/10'
          />
          <VideoComp
            title="Nausheen"
            desc="mern stack to millions"
            src="https://www.youtube.com/watch?v=kVVJHl_5cgM"
            type="youtube"
             ratting='10/10'
          />
          <VideoComp
            title="Ravi kumar"
            desc="mern stack to millions"
            src="https://www.youtube.com/watch?v=GQbOYGnZjxA"
            type="youtube"
             ratting='9/10'
          />
          <VideoComp
            title="Anand Gupta"
            desc="mern stack to millions"
            src="https://www.youtube.com/watch?v=Dc0PY2B4Fd0"
            type="youtube"
             ratting='10/10'
          />
          <VideoComp
            title="Sudip Baniya"
            desc="mern stack to millions"
            src="https://www.youtube.com/watch?v=Pl78c1gPsKI"
            type="youtube"
             ratting='9/10'
          />
          <VideoComp
            title="Ashish kumar"
            desc="mern stack to millions"
            src="https://www.youtube.com/watch?v=5Sfjcs8e9gg"
            type="youtube"
             ratting='9/10'
          />
          <VideoComp
            title="Waseem"
            desc="mern stack to millions"
            src="https://www.youtube.com/watch?v=r3DymiBBKqg"
            type="youtube"
             ratting='10/10'
          />
          <VideoComp
            title="Sandeep"
            desc="mern stack to millions"
            src="https://www.youtube.com/watch?v=g1AM_vLK7Sk"
            type="youtube"
             ratting='9/10'
          />
        </div>
        
      </div>
    </div>
  );
}

export default CourseReview;

export const VideoComp = ({ title, desc, src,type ,ratting}) => {
  const embedLink = src.replace("watch?v=", "embed/").replace("&list=", "?list=");
  return (
    <div className=" border p-2 rounded border-gray-500 py-4">
      {type=='youtube'?(
             <iframe src={embedLink} 
             title={title}
             allowFullScreen
             >

             </iframe>
      ):
      (
      <video
        src={src}
        alt={title}
        poster={userlogo}
        className="w-90 h-70 object-cover z-0  rounded-lg"
        controls
      ></video>
      )}
      <div className="px-4">
        <h1 className="font-bold pt-5">{title}</h1>
        <p className="text-gray-400 pb-2">{desc}</p>
        <p>Ratting : {ratting}</p>
      </div>
      
    </div>
  );
};
