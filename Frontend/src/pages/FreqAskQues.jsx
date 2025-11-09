import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HelpIcon from "@mui/icons-material/Help";

function FreqAskQues() {
  return (
    <div className="flex flex-col gap-4">
      <Content
        title="Do I need prior coding exprience?"
        ans="Yes! html, css, javascript skills required"
      />
      <Content
        title="Will I get a certificate?"
        ans="Yes, you’ll receive a certificate after completing the course and projects."
      />
      <Content
        title="What if I miss a class?"
        ans="No worries. All classes are recorded and made available for you to watch later."
      />
      <Content
        title="Is this course beginner-friendly?"
        ans="Absolutely. We’ve helped thousands of beginners go from zero to job-ready."
      />
      <Content
        title="Do I get placement support?"
        ans="Yes! We provide placement support."
      />
    </div>
  );
}

export default FreqAskQues;

export const Content = ({ title, ans }) => {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(!open)} className="border border-gray-600">
      <div className="flex flex-row justify-between items-center px-8 py-3 rounded-lg">
        <span>
          <HelpIcon className="text-fuchsia-400" />
        </span>
        <h1 className="font-bold">{title}</h1>

        <span className="">
          <KeyboardArrowDownIcon
            className={`transform transition-transform duration-200 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </span>
      </div>
      {open && <p className="text-gray-300 my-3 px-10">{ans}</p>}
    </div>
  );
};
