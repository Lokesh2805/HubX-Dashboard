import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Modal from "./Components/Modal";
import MainContent from "./MainContent";
import { IoIosPeople } from "react-icons/io";
import SecondarySection from "./SecondarySection";
import InviteModal from "./Components/Modal";
const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-2 bg-gray-100 min-h-screen">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <MainContent />

      {/* Secondary Section (User Activity, Blog, Events, etc.) */}
      <SecondarySection />

      {/* Invite Button  */}
      <button
        className="fixed flex justify-between items-center gap-x-2 bottom-8 right-8 bg-green-500 text-white py-3 px-6 rounded-full shadow-lg"
        onClick={() => setModalOpen(true)}
      >
        Invite People <IoIosPeople className="w-7 h-7" />
      </button>
      {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}
    </div>
  );
};

export default App;
