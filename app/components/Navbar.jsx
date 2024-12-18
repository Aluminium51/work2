"use client";
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-10 bg-gray-800 ">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold px-8">
          MyLogo
        </a>

        {/* Hamburger Menu */}
        <div onClick={handle} className="block md:hidden">
        {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:space-x-6 absolute md:static bg-gray-800 w-full md:w-auto top-full left-0 shadow-md md:shadow-none `}
        >
          <a
            href="#home"
            className="block px-6 py-2 hover:text-light-blue-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-6 py-2 hover:text-light-blue-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="block px-6 py-2 hover:text-light-blue-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block px-6 py-2 hover:text-light-blue-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

