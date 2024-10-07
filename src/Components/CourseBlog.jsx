import React from "react";
import { GoDot } from "react-icons/go";
function CourseBlog() {
  const data = [
    {
      content: "Blend Learing: What it is, Why it matters & How to Apply",
      timestamp: "7 days ago",
    },
    {
      content: "Join the Course Sales Bootcamp [Free Live Workshop]",
      timestamp: "12 days ago",
    },
    {
      content: "12 Steps to Creating Awesome Lice Classes in 2021",
      timestamp: "20 days ago",
    },
    {
      content:
        "Guy Kawasaki on the Future of Business in the Midest of a Pandemic",
      timestamp: "22 days ago",
    },
    {
      content:
        "what is Educational Marketing & How to use it to Grow with Examples",
      timestamp: "23 days ago",
    },
  ];
  return (
    <div className="space-y-2">
      {data.map((item, index) => {
        return (
          <p className="text-sm flex justify-between">
            <p className="text-[#55ccc1] w-1/2 flex justify-start items-start">
              <GoDot className=" w-6 h-6" />
              {item.content}
            </p>
            <p className="text-xs text-gray-400">{item.timestamp}</p>
          </p>
        );
      })}
    </div>
  );
}

export default CourseBlog;
