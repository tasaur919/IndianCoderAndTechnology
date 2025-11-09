import React from "react";
import logo from "../assets/logo2.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import VerifiedIcon from "@mui/icons-material/Verified";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BuildProject from "./BuildProject";

import LockOutlineIcon from "@mui/icons-material/LockOutline";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CodeIcon from "@mui/icons-material/Code";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import TheatersIcon from "@mui/icons-material/Theaters";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

import BuildTech from "./BuildTech";
import userlogo from "../assets/user.jpg";
import FreqAskQues from "./FreqAskQues";
import { Link } from "react-router-dom";
import CourseReview from "./CourseReview";

function Home() {
  return (
    <div className="min-h-screen mt-24 px-5 md:mt-28">
      <div className="w-full">
        <div className="row1 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="col1">
            <h1 className='text-5xl font-bold bg-linear-to-l from-orange-400 via-pink-500 to-pink-400 bg-clip-text text-transparent leading-tight text-center md:text-left py-5'>
              Build MERN Stack Projects That Scale to Millions
            </h1>
            <p className="text-[20px] text-gray-300 text-center md:text-left">
              The complete MERN stack course to build real-world apps ready for
              production, jobs, and startups
            </p>
            <div className="bg-gray-600 my-6 rounded py-6 px-8 text-center md:text-left">
              <span className="bg-linear-to-l from-orange-400 to-yellow-500  rounded px-4 py-1  text-black font-bold text-[18px]">
                Free - HTML,CSS,JavaScript
              </span>
              <p className="mt-4 font-bold text-[28px] text-green-400">
                
                ₹7000
              </p>
            </div>
            <div className="text-center md:text-left">
              <Link
                to={"/payment"}
                className="text-[20px] font-bold bg-linear-to-l from-pink-400 to-blue-500  py-2 px-4 shadow-lg hover:text-[22px] duration-200 transition-transform hover:shadow-pink-500/99 rounded"
              >
                Enroll Now
              </Link>
            </div>
          </div>
          <div className="col2 mt-10">
            <img src={logo} alt="" className="w-full h-86 rounded-lg" />
            <div className=" mt-10  flex flex-col gap-10">
              <div className="row1  grid grid-cols-2 gap-10">
                <div className="flex flex-row gap-10 justify-center items-center border py-3 px-8 rounded-lg border-gray-500 hover:bg-gray-700 duration-200 hover:shadow-gray-400/50 shadow-lg ">
                  <span className="text-blue-400 ">
                    
                    <AccessTimeIcon fontSize="large" />
                  </span>
                  <div>
                    <h1 className="text-[20px] font-bold">Level</h1>
                    <p className="text-gray-300 text-[18px] mt-2">
                      beginner to enterprise
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-8 justify-center items-center border py-5 px-8 rounded-lg border-gray-500 hover:bg-gray-700 duration-200 hover:shadow-gray-400/50 shadow-lg">
                  <span className="text-pink-400 ">
                    
                    <HelpOutlineIcon fontSize="large" />
                  </span>
                  <div>
                    <h1 className="text-[20px] font-bold">Doubt Support</h1>
                    <p className="text-gray-300 text-[18px] mt-2">Yes</p>
                  </div>
                </div>
              </div>
              <div className="row2  grid grid-cols-2 gap-10">
                <div className="flex flex-row gap-8 justify-center items-center border py-2 px-5 rounded-lg border-gray-500 hover:bg-gray-700 duration-200 hover:shadow-gray-400/50 shadow-lg ">
                  <span className="text-blue-300">
                   
                    <VerifiedIcon fontSize="large" />
                  </span>
                  <div>
                    <h1 className="text-[20px] font-bold">Certificate</h1>
                    <p className="text-gray-300 text-[18px] mt-2">Yes</p>
                  </div>
                </div>
                <div className="flex flex-row gap-8 justify-center items-center border py-5 px-10 rounded-lg border-gray-500 hover:bg-gray-700 duration-200 hover:shadow-gray-400/50 shadow-lg">
                  <span className="text-green-400 ">
                    
                    <BusinessCenterIcon fontSize="large" />
                  </span>
                  <div>
                    <h1 className="text-[20px] font-bold">Placement Support</h1>
                    <p className="text-gray-300 text-[18px] mt-2">Yes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row2 mt-12 shadow-lg w-full">
          <div className="flex flex-col gap-10 justify-center items-center">
            <h1 className="text-4xl font-bold bg-linear-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent pt-8">
              Projects You Will Build
            </h1>
            <p className="text-gray-200 mb-10 text-center">
              Get hands-on experience with real-world applications that showcase
              your MERN stack expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
            <BuildProject
              heading="Admin Signer CLI"
              para="A command-line tool to securely generate and sign admin tokens or credentials for internal APIs and deployment automation."
              src={
                <LockOutlineIcon
                  fontSize="large"
                  className="text-6xl min-w-[62px] rounded-lg py-1 bg-fuchsia-500 "
                />
              }
            />
            <BuildProject
              heading="File Sharing Platform"
              para="Secure file sharing with encryption, expiry links, and access controls."
              src={
                <VerifiedUserIcon
                  fontSize="large"
                  className="text-6xl min-w-[62px] rounded-lg py-1 bg-green-500 "
                />
              }
            />
            <BuildProject
              heading="Ebook Selling Platform"
              para="Sell DRM-protected ebooks with user libraries, previews, and secure delivery."
              src={
                <MenuBookIcon
                  fontSize="large"
                  className="text-6xl min-w-[62px] rounded-lg py-1 bg-orange-400 "
                />
              }
            />
            <BuildProject
              heading="Video Calling App"
              para="Real-time video calling with WebRTC, signaling server, and call history features."
              src={
                <VideoChatIcon
                  fontSize="large"
                  className="text-6xl min-w-[62px] rounded-lg py-1 bg-blue-400 "
                />
              }
            />
            <BuildProject
              heading="Audio Calling App"
              para="High-quality audio calling with VoIP and noise suppression features"
              src={
                <WifiCalling3Icon
                  fontSize="large"
                  className="text-6xl min-w-[62px] rounded-lg py-1 bg-fuchsia-400 "
                />
              }
            />
            <BuildProject
              heading="Social Media"
              para="Full-featured social platform with user profiles, posts, likes, comments, real-time chat, and media sharing"
              src={
                <ChatBubbleOutlineIcon
                  fontSize="large"
                  className="text-6xl min-w-[62px] rounded-lg py-1 bg-blue-400 "
                />
              }
            />
            <BuildProject
              heading="Video Hosting Platform"
              para="Custom video hosting with transcoding, thumbnails, analytics, and secure streaming."
              src={
                <DragHandleIcon
                  fontSize="large"
                  className="text-6xl min-w-[62px] rounded-lg py-1 bg-red-400 "
                />
              }
            />
            <BuildProject
              heading="Framework Development"
              para="Built a lightweight JavaScript framework with component system, reactivity, and routing."
              src={
                <CodeIcon
                  fontSize="large"
                  className="text-6xl min-w-[62px] rounded-lg py-1 bg-blue-500 "
                />
              }
            />
            <BuildProject
              heading="Notification System"
              para="Real-time and scheduled notifications via email, SMS, and in-app messaging."
              src={
                <NotificationsActiveIcon
                  fontSize="large"
                  className="text-6xl min-w-[62px] rounded-lg py-1 bg-orange-400 "
                />
              }
            />
            <BuildProject
              heading="Video Processing Engine"
              para="Automated video compression, resolution conversion, and thumbnail generation using FFmpeg."
              src={
                <TheatersIcon
                  fontSize="large"
                  className="text-6xl min-w-[62px] rounded-lg py-1 bg-blue-300"
                />
              }
            />
            <BuildProject
              heading="Security System"
              para="Advanced role-based access control, IP whitelisting, encryption, and token management."
              src={
                <LockOutlineIcon
                  fontSize="large"
                  className="text-6xl min-w-[62px] rounded-lg py-1 bg-gray-400 "
                />
              }
            />
            <BuildProject
              heading="Cloud Automation App"
              para="Automates cloud infrastructure provisioning, scaling, and deployment using IaC, CI/CD pipelines, and custom workflows."
              src={
                <CloudQueueIcon
                  fontSize="large"
                  className="text-6xl min-w-[62px] rounded-lg py-1 bg-emerald-300 "
                />
              }
            />
          </div>
        </div>

         <div className="row7 text-center mt-10">
          <h1 className=" text-3xl font-bold  bg-linear-to-r from-pink-400 via-orange-400 to-red-500 text-transparent bg-clip-text mb-5">
            Ready to Launch Your Developer Journey?
          </h1>
          <p className="font text-[20px] text-gray-300 pb-10">
            Join hundreds of learners who’ve transformed their careers. Learn,
            build, and get hired.
          </p>

          <Link
            to={"/payment"}
            className="bg-linear-to-l from-blue-400 via-red-400 to-orange-500 py-2 px-3 rounded-lg  shadow-lg hover:shadow-amber-500/50 hover:text-[20px] font-semibold duration-200"
          >
            <RocketLaunchIcon />
            Enroll Now & Start Learning
          </Link>
        </div>

        <div className="row3 mt-20 border-t py-10">
          <div>
            <h1 className="text-center text-4xl font-bold  bg-linear-to-r from-pink-400 via-orange-400 to-red-500 text-transparent bg-clip-text">
              Master the Modern Tech Stack
            </h1>
            <p className="text-[20px] text-gray-300 py-3 text-center">
              Everything from frontend to DevOps ans react — taught with
              clarity, purpose, and enterprise-ready experience.
            </p>
          </div>

          <div className="">
            <BuildTech />
          </div>
        </div>
        <div className="text-center pt-20">
          <Link
            to={"/payment"}
            className="bg-linear-to-l from-blue-400 via-red-400 to-orange-500 py-2 px-3 rounded-lg  shadow-lg hover:shadow-amber-500/50 hover:text-[20px] font-semibold duration-200"
          >
            <RocketLaunchIcon />
            Enroll Now & Start Learning
          </Link>
        </div>
        <div className="ro4">
          <CourseReview />
        </div>
        <div className="row5 flex flex-col justify-center items-center mt-10 border-t py-5 border-gray-600 shadow-lg">
          <img
            src={userlogo}
            alt="User loading Error"
            className="text-center w-70 h-70 rounded-full object-cover"
          />
          <div className="mt-10 text-center">
            <h1 className="text-center text-5xl font-bold  bg-linear-to-r from-pink-400 via-orange-400 to-red-500 text-transparent bg-clip-text mb-5">
              Hi, I m Tasauvar Ansari — Your Instructor
            </h1>
            <p className="text-[20px] text-gray-300">
              I’m currently a Cloud Server Architect at GoDaddy with past roles
              at Google, IBM, and Hitachi. With deep industry experience, I’ve
              transitioned into teaching to mentor the next generation of
              developers through real-world, project-based learning.
            </p>
          </div>
        </div>
        <div className="row6 mt-10">
          <div className="flex flex-col py-10 text-center">
            <h1 className="text-center text-3xl font-bold  bg-linear-to-t from-pink-400 via-orange-400 to-red-500 text-transparent bg-clip-text mb-5">
              Frequently Asked Questions
            </h1>
            <p className="text-[20px] text-gray-300">
              Got questions? We have got answers to help you feel confident
              about joining.
            </p>
          </div>
          <FreqAskQues />
        </div>
        <div className="row7 text-center mt-10">
          <h1 className=" text-3xl font-bold  bg-linear-to-r from-pink-400 via-orange-400 to-red-500 text-transparent bg-clip-text mb-5">
            Ready to Launch Your Developer Journey?
          </h1>
          <p className="font text-[20px] text-gray-300 pb-10">
            Join hundreds of learners who’ve transformed their careers. Learn,
            build, and get hired.
          </p>

          <Link
            to={"/payment"}
            className="bg-linear-to-l from-blue-400 via-red-400 to-orange-500 py-2 px-3 rounded-lg  shadow-lg hover:shadow-amber-500/50 hover:text-[20px] font-semibold duration-200"
          >
            <RocketLaunchIcon />
            Enroll Now & Start Learning
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
