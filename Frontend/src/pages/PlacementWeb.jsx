import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Link } from "react-router-dom";
function PlacementWeb() {
  return (
    <div className="min-h-screen mt-24 px-5 md:mt-28">
      <div className="row1">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-5">
            Placement Assistance Webinars
          </h1>
          <span className=" text-[20px] px-3 rounded py-1 bg-gray-600 w-fit">
            Access available only for{" "}
            <span className="font-bold">Indian Coder Premium</span> members.
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8">
          <PlaceComp
            desc="Who should attend this program ? Mern stack students or OttPlus"
            dates="March 2, 2026 / March 12, 2026"
          />
          <PlaceComp
            desc="Who should attend this program ? Mern stack students or OttPlus"
            dates="November 3, 2026 / November 13, 2026"
          />
          <PlaceComp
            desc="Who should attend this program ? Software Engineering or CIT"
            dates="Apr 6, 2027 / Apr 16, 2027"
          />
          <PlaceComp
            desc="Who should attend this program ? Mern stack students or OttPlus"
            dates="August 11, 2027 / August 21, 2027"
          />
          <PlaceComp
            desc="Who should attend this program ? Mern stack students or OttPlus"
            dates="December 08, 2027 / December 18, 2027"
          />
          <div className="border shadow-lg hover:shadow-gray-300/50 h-11/12  flex flex-col justify-center items-center rounded-md border-gray-600 px-8 py-8 my-6">
            <h1 className=" text-3xl text-red-500 font-bold text-center">
              Mern stack course closed
            </h1>
            <p className="text-gray-300 mt-6 text-[22px]  text-center">
              Course and placement support closed for lifetime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlacementWeb;

export const PlaceComp = ({ desc, dates }) => {
  return (
    <div className="border rounded-md border-gray-600 shadow-lg hover:shadow-gray-300/50 px-6 py-4 my-3">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-[22px]">Placement support</h1>
        <Link to={'/payment'} className="hover:bg-gray-600 px-2 py-1 rounded-lg shadow-lg hover:shadow-gray-600/50 border border-gray-600 duration-200">
          Premium
        </Link>
      </div>
      <div className="flex flex-wrap flex-row gap-5 text-gray-400 py-8">
        <span>
          <CalendarMonthIcon /> {dates}
        </span>
        <span>
          <AccessTimeIcon /> 08:00 PM or 02:00 PM
        </span>
      </div>
      <div>
        <p>{desc}</p>
      </div>
    </div>
  );
};
