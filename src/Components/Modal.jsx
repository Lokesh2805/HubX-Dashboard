import React, { useEffect, useState } from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function Modal({ closeModal }) {
  const [data, setData] = useState({
    datasets: [
      {
        data: [0, 0], 
        backgroundColor: ["red", "blue"],
      },
    ],
    labels: ["Invites", "Duration"],
  });

  const [numInvites, setNumInvites] = useState(5);
  const [duration, setDuration] = useState(10);
  const [price, setPrice] = useState(250);

  useEffect(() => {
 
    setData({
      datasets: [
        {
          data: [numInvites, duration], 
          backgroundColor: ["red", "blue"],
        },
      ],
      labels: ["Invites", "Duration"], 
    });
  }, [numInvites, duration]); 

  const handleNumInvitesChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setNumInvites(value);
    calculatePrice(value, duration);
  };

  const handleDurationChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setDuration(value);
    calculatePrice(numInvites, value);
  };

  const calculatePrice = (invites, duration) => {
    const pricePerInvite = 10; //  price per invite
    const pricePerHour = 20; //  price per hour
    const totalPrice = invites * pricePerInvite + duration * pricePerHour;
    setPrice(totalPrice);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Form submitted with ${numInvites} invites for ${duration} hours. Total price: $${price}`
    );
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
      <div className=" max-w-full mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-end gap-x-40 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            Event Invitation Form
          </h2>{" "}
          <button
            onClick={closeModal}
            className=" -mt-14 -mr-3 text-red-500 font-bold text-2xl"
          >
            X
          </button>
        </div>
        <div className="flex">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className=" text-gray-700 text-lg  mb-2 flex justify-between gap-x-20">
                  <p>Number of invites</p> <p>{numInvites}</p>
                </label>
                <input
                  type="range"
                  value={numInvites}
                  onChange={handleNumInvitesChange}
                  className="w-full h-1 mb-6 bg-blue-600 rounded-lg appearance-none cursor-pointer dark:bg-blue-600"
                  min="0"
                />
              </div>
              <div className="mb-4">
                <label className=" text-gray-700 text-lg  mb-2 flex justify-between gap-x-20">
                  <p>Duration of Event (hours)</p> <p>{duration}</p>
                </label>
                <input
                  type="range"
                  value={duration}
                  onChange={handleDurationChange}
                  className="w-full h-1 mb-6 bg-blue-600 rounded-lg appearance-none cursor-pointer dark:bg-blue-600"
                  min="0"
                />
              </div>
              <div className="mb-4">
                <p className="text-lg font-bold text-gray-700 flex gap-x-2">
                  <p className="text-gray-500">Total Price:</p> ₹{price}
                </p>
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
          </div>
          <div>
            <Doughnut data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
