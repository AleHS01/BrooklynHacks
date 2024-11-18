import React, { useState } from "react";
import logo from "../../assets/sticker.png"; // Your logo image

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 left-0 w-full px-8 py-4 mb-8 z-50 backdrop-blur-md bg-opacity-40 bg-gray-800 border-b border-gray-300/20">
      <div className="flex items-center justify-between">
        <a href="#home" className="flex-shrink-0">
          <img src={logo} alt="Logo" width={80} className="text-white" />
        </a>

        <button className="text-white block md:hidden" onClick={toggleMenu}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <div className={`hidden md:flex md:justify-end md:w-full mt-4 md:mt-0`}>
          <ul className="space-y-4 md:space-x-6 md:flex md:space-y-0 md:text-lg">
            <MenuItem to="#about">About</MenuItem>
            <MenuItem to="#schedule">Schedule</MenuItem>
            <MenuItem to="#tracks">Tracks</MenuItem>
            <MenuItem to="#workshops">Workshops</MenuItem>
            <MenuItem to="#sponsors">Sponsors</MenuItem>
            <MenuItem to="#faq">FAQ</MenuItem>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden w-full mt-4">
          <ul className="space-y-4 text-lg text-center">
            <MenuItem to="#about">About</MenuItem>
            <MenuItem to="#schedule">Schedule</MenuItem>
            <MenuItem to="#tracks">Tracks</MenuItem>
            <MenuItem to="#workshops">Workshops</MenuItem>
            <MenuItem to="#sponsors">Sponsors</MenuItem>
            <MenuItem to="#faq">FAQ</MenuItem>
          </ul>
        </div>
      )}
    </nav>
  );
};

const MenuItem = ({ children, to = "#", ...rest }) => {
  return (
    <li {...rest}>
      <a
        href={to}
        className="text-white hover:text-purple-400 transition-colors duration-300"
      >
        {children}
      </a>
    </li>
  );
};

const CloseIcon = () => (
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="currentColor"
      d="M6 18L18 6M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 6h18M3 12h18M3 18h18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default NavBar;
