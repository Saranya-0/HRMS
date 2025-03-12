import React, { useState } from "react";
import { FaSearch, FaUserCircle, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

import Logout from '../Components/Logout';

function Navbar({ expanded }) {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav
      className={`p-4 shadow-md fixed top-0 right-0 z-50 transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
      style={{
        left: expanded ? "256px" : "80px",
        width: expanded ? "calc(100% - 256px)" : "calc(100% - 80px)",
      }}>
      <div className="flex justify-between items-center">
        
        <div className="flex items-center space-x-4 mx-auto">
          <div className="relative w-56 sm:w-72">
            <input type="search" placeholder="Search..." className="w-full p-2 pl-10 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition"/>
            <FaSearch className="absolute left-3 top-3 text-gray-500" />
          </div>

          <span className="bg-pink-500 text-white px-4 py-1 rounded-md text-sm shadow-md">
            {new Date().toLocaleDateString("en-GB")}
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
          </button>

          <div className="relative">
            <FaUserCircle className="text-2xl cursor-pointer hover:text-pink-500 transition" onClick={() => setIsOpen(!isOpen)} />
            {isOpen && (
              <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg overflow-hidden z-50 transition ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
                <Link to="/signin" className="block px-4 py-2 transition hover:bg-pink-500 hover:text-white">
                  Sign In
                </Link>
                <Link to="/signup" className="block px-4 py-2 transition hover:bg-pink-500 hover:text-white">
                  Sign Up
                </Link>
                
               
                <Logout className="text-gray-900" /> 
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
