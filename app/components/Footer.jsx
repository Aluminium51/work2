import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-6">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} Noptanadon. All Rights Reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-500 transition"
          >
            <FaFacebook size={32} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-500 transition"
          >
            <FaInstagram size={32} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-500 transition"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-500 transition"
          >
            <FaGithub size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
