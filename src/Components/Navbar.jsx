import React from "react";
import { HiPlus } from "react-icons/hi";
import { IoEyeOutline } from "react-icons/io5";
import { IoPower } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky z-20 top-0 flex justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-md">
      <div className="flex space-x-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="space-x-4">
          <div className="flex justify-center items-center gap-x-1">
            {" "}
            <button className="flex items-center justify-center bg-gray-200 rounded-full w-8 h-8">
              <HiPlus />
            </button>
            Create Course
          </div>
        </div>
        <div className="space-x-4">
          <div className="flex justify-center items-center gap-x-1">
            {" "}
            <button className="flex items-center justify-center bg-gray-200 rounded-full w-8 h-8">
              <IoEyeOutline />
            </button>
            Preview Home Page
          </div>
        </div>
        <div className="space-x-4">
          <div className="flex justify-center items-center gap-x-1">
            {" "}
            <button className="flex items-center justify-center bg-gray-200 rounded-full w-8 h-8">
              <IoEyeOutline />
            </button>
            Preview after login page
          </div>
        </div>
        <div className="space-x-4">
          <div className="flex justify-center items-center gap-x-1">
            {" "}
            <button className="flex items-center justify-center bg-gray-200 rounded-full w-8 h-8">
              <IoPower />
            </button>
            View Welcome Screen
          </div>
        </div>
      </div>
      <div className="space-x-4">
        <div className="flex justify-center items-center gap-x-1">
          {" "}
          <button className="flex items-center justify-center bg-[#55ccc1] text-white rounded-full w-8 h-8">
            <FaQuestion />
          </button>
          Help
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
