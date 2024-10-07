import React, { useState } from "react";
import ChartComponent from "./Components/ChartComponent";
import { SlCalender } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { SiConvertio } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuAlarmClock } from "react-icons/lu";
import { PiNotepad } from "react-icons/pi";
import { VscTag } from "react-icons/vsc";
function MainContent() {
  const [activeTab, setActiveTab] = useState("New signups");
  const tabs = ["New signups", "Revenue", "Product sales", "Active learners"];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8  bg-white p-6 rounded-lg shadow-md">
      {/* Chart Area */}
      <div className="col-span-2">
        <div className="flex justify-between">
          <div>
            <h2 className="text-md text-gray-600 font-semibold mb-6 flex justify-center items-center gap-x-1">
              {" "}
              <SlCalender />
              Your school
            </h2>
          </div>
          <div className="flex justify-center items-center gap-x-1 mb-6 ">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`relative text-sm md:text-md font-semibold px-2 py-2 ${
                  activeTab === tab ? "text-gray-600" : "text-gray-400"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                <span
                  className={`absolute bottom-0 left-0 rounded-full h-[3px] w-full transition-all duration-300 transform ${
                    activeTab === tab
                      ? "bg-[#55ccc1] scale-x-100"
                      : "bg-transparent scale-x-0"
                  } hover:bg-[#55ccc1] hover:scale-x-100`}
                ></span>
              </button>
            ))}
            <select
              id="countries"
              class="bg-gray-200 border border-gray-200 text-gray-600 font-semibold text-md rounded-lg text-center"
            >
              <option selected>Select timestamp</option>
              <option value="US">Yesterday</option>
              <option value="CA">Last 7 days</option>
              <option value="FR">Last month</option>
              <option value="DE">Last year</option>
            </select>
          </div>
        </div>

        {/* Placeholder for your chart */}
        <div className="h-68 rounded-lg">
          <ChartComponent />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 top-0">
        {/* Individual Stat Cards */}
        <div className="flex flex-col justify-center  items-center text-center gap-y-2">
          <FaRegUser className="w-10 h-10 text-[#55ccc1]" />
          <h3 className="text-sm font-medium text-gray-400">All Users</h3>
          <p className="text-3xl font-semibold text-gray-700">1</p>
        </div>
        <div className="flex flex-col justify-center  items-center text-center gap-y-2">
          <SiConvertio className="w-10 h-10 text-[#55ccc1]" />
          <h3 className="text-sm font-medium text-gray-400">Conversions</h3>
          <p className="text-3xl font-semibold text-gray-700">
            0<sub className="text-sm font-medium text-gray-400">%</sub>
          </p>
        </div>
        <div className="flex flex-col justify-center  items-center text-center gap-y-2">
          <HiOutlineShoppingBag className="w-10 h-10 text-[#55ccc1]" />
          <h3 className="text-sm font-medium text-gray-400">30 days sales</h3>
          <p className="text-3xl font-semibold text-gray-700">0</p>
        </div>
        <div className="flex flex-col justify-center  items-center text-center gap-y-2">
          <LuAlarmClock className="w-10 h-10 text-[#55ccc1]" />
          <h3 className="text-sm font-medium text-gray-400">Avg time</h3>
          <p className="text-3xl font-semibold text-gray-700">
            0<sub className="text-sm font-medium text-gray-400">min</sub>
          </p>
        </div>
        <div className="flex flex-col justify-center  items-center text-center gap-y-2">
          <PiNotepad className="w-10 h-10 text-[#55ccc1]" />
          <h3 className="text-sm font-medium text-gray-400">Courses</h3>
          <p className="text-3xl font-semibold text-gray-700">0</p>
        </div>
        <div className="flex flex-col justify-center  items-center text-center gap-y-2">
          <VscTag className="w-10 h-10 text-[#55ccc1]" />
          <h3 className="text-sm font-medium text-gray-400">
            Courses categories
          </h3>
          <p className="text-3xl font-semibold text-gray-700">0</p>
        </div>
        {/* Add more stats as needed */}
      </div>
    </div>
  );
}

export default MainContent;
