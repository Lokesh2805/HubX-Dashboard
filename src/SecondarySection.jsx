import React from "react";
import { FaRegUser } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { IoNewspaper } from "react-icons/io5";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaKey } from "react-icons/fa6";
import TrialPeriod from "./Components/Timer";
import CourseBlog from "./Components/CourseBlog";

function SecondarySection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8 items-start">
      <div className="bg-white p-4 rounded-lg shadow-md space-y-2">
        <div className="flex justify-start items-center gap-x-2">
          <FaRegUser className="h-5 w-5" />{" "}
          <h2 className="font-semibold text-gray-700">New Users</h2>{" "}
          <button className="bg-[#55ccc1] rounded-full h-fit px-2 text-xs text-white">
            See all
          </button>
        </div>
        <div className="flex gap-3">
          <div className="bg-gray-200 w-fit h-fit p-2">
            <BsEmojiSmile className="w-9 h-9" />
          </div>
          <div className="text-gray-800">
            <p className="text-xl">hubx</p>
            <p className="text-sm">24 minutes</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md space-y-2">
        <div className="flex justify-start items-center gap-x-2">
          <IoNewspaper className="h-5 w-5" />
          <h2 className="font-semibold text-gray-700">
            How to sell course blog
          </h2>{" "}
          <button className="bg-[#55ccc1] rounded-full h-fit px-2 text-xs text-white">
            See all
          </button>
        </div>
        <div className="flex gap-3">
          <CourseBlog />
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md space-y-2">
        <div className="flex justify-start items-center gap-x-2">
          <TbActivityHeartbeat className="h-5 w-5" />{" "}
          <h2 className="font-semibold text-gray-700">Event log</h2>{" "}
          <button className="bg-[#55ccc1] rounded-full h-fit px-2 text-xs text-white">
            See all
          </button>
        </div>
        <div className="flex gap-3">
          <div className=" p-2">
            <FaKey className="w-3 h-3" />
          </div>
          <div className="text-gray-800">
            <p className="text-sm flex justify-between gap-x-44">
              <p className="text-[#55ccc1]">hubx</p>
              <p className="text-xs text-gray-400">22 minutes</p>
            </p>
            <p className="text-sm">Logged in</p>
            <p className="text-sm text-[#55ccc1]">More info</p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <TrialPeriod />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md space-y-2">
          <div className="flex justify-start items-center gap-x-2">
            <FaRegUser className="h-5 w-5" />{" "}
            <h2 className="font-semibold text-gray-700">New Users</h2>{" "}
            <button className="bg-[#55ccc1] rounded-full h-fit px-2 text-xs text-white">
              See all
            </button>
          </div>
          <div className="flex gap-3">
            <div className="bg-gray-200 w-fit h-fit p-2 flex items-end">
              <BsEmojiSmile className="w-9 h-9" />
              <div className="bg-green-600 rounded-full w-2 h-2 -mb-3 -mr-3"></div>
            </div>
            <div className="text-[#55ccc1] flex justify-between items-center gap-x-36">
              <p className="text-lg">hubx</p>
              <button className="bg-[#55ccc1] rounded-sm  h-fit px-2 text-md text-white">
                contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondarySection;
