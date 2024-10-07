import React from "react";
import { BsHourglassSplit } from "react-icons/bs";
export default function TrialPeriod() {
  return (
    <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-lg">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-gray-600 text-xl font-semibold">Trial period</h2>
        <BsHourglassSplit className="text-cyan-500 w-6 h-6" />
      </div>
      <div className="flex justify-center items-center mb-6">
        <div className="relative">
          <svg className="w-32 h-32" viewBox="0 0 128 128">
            <circle
              cx="64"
              cy="64"
              r="60"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="8"
            />
            <circle
              cx="64"
              cy="64"
              r="60"
              fill="none"
              stroke="#4FD1C5"
              strokeWidth="8"
              strokeDasharray="377"
              strokeDashoffset="94.25"
              strokeLinecap="round"
              transform="rotate(-90 64 64)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-4xl font-bold text-gray-800">30</span>
            <span className="text-xs font-medium text-gray-600">DAYS LEFT</span>
          </div>
        </div>
      </div>
      <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
        Upgrade now! &raquo;
      </button>
    </div>
  );
}
