import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#1e3c72] to-[#2a5298] p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold poppins-bold">JotJoy</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white relative group transition duration-300 poppins-regular"
          >
            Home
            <span className="absolute left-0 w-0 bg-white h-0.5 bottom-0 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/notes"
            className="text-white relative group transition duration-300 poppins-regular"
          >
            My Notes
            <span className="absolute left-0 w-0 bg-white h-0.5 bottom-0 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/about"
            className="text-white relative group transition duration-300 poppins-regular"
          >
            About
            <span className="absolute left-0 w-0 bg-white h-0.5 bottom-0 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1e3c72] text-white space-y-4 p-4">
          <Link to="/" className="block hover:text-gray-300">Home</Link>
          <Link to="/notes" className="block hover:text-gray-300">My Notes</Link>
          <Link to="/about" className="block hover:text-gray-300">About</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
