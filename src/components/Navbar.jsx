<<<<<<< HEAD
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-4 px-[7%] bg-gradient-to-r from-violet-500 to-violet-950 text-white box-border shadow-2xl backdrop-blur-sm border-b border-white/10'>
      <div className="logo animate-pulse">
        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-xl">✓</span>
        </div>
      </div>
      <ul className='flex gap-7 font-bold text-[1.2vw]'>
        <li className='hover:text-violet-300 cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-lg'>Home</li>
        <li className='hover:text-violet-300 cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-lg'>About</li>
        <li className='hover:text-violet-300 cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-lg'>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
=======
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Perform logout logic here, e.g., clearing user session
    // For demonstration, we'll just navigate to the login page
    navigate("/");
  };
  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-gradient-to-r from-violet-100 via-white to-purple-100 shadow-sm border-b border-purple-200 text-gray-800">
      {/* Logo + Name */}
      <div className="flex items-center gap-2 font-semibold text-purple-700 text-xl">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-400 text-white rounded-full flex items-center justify-center shadow">
          ✓
        </div>
        TodoMaster
      </div>

      {/* Nav Links */}
     <ul className="flex gap-6 text-sm md:text-base font-semibold items-center">
  <li className="cursor-pointer text-gray-700 hover:text-purple-700 transition-colors duration-300 hover:underline underline-offset-4">
    Home
  </li>
  <li className="cursor-pointer text-gray-700 hover:text-purple-700 transition-colors duration-300 hover:underline underline-offset-4">
    About
  </li>
  <button
    onClick={handleLogout}
    className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
  >
    Logout
  </button>
</ul>
    </nav>
  );
};

export default Navbar;
>>>>>>> 5edf657 (Added new UI and fixed task delete bug)
