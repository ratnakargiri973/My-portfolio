import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Sidebar.css";
import profile from "../assets/profile.jpg";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaHome,
  FaImages,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { RiUserFill } from "react-icons/ri";
import { LuFileText } from "react-icons/lu";
import { MdContactMail } from "react-icons/md";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClicked = (index) => {
    setActiveIndex(index);
    setIsOpen(false);
  };

  const menuItems = [
    { icon: <FaHome />, label: "Home", to: "/" },
    { icon: <RiUserFill />, label: "About", to: "/about" },
    { icon: <LuFileText />, label: "Resume", to: "/resume" },
    { icon: <FaImages />, label: "Projects", to: "/projects" },
    { icon: <MdContactMail />, label: "Contact", to: "/contact" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="menu-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`sidebar-content ${isOpen ? "sidebar-open" : ""}`}>
        {/* Profile Section */}
        <div className="profile-section">
          <img src={profile} alt="Profile" />
          <h1 className="profile-name">Ratnakar Giri</h1>
          <ul className="social-links">
            <li className="hover:bg-blue-500"><a href="https://www.linkedin.com/in/ratnakar-giri-195998244/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
            <li className="hover:bg-gray-500"><a href="https://github.com/ratnakargiri973" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
            <li className="hover:bg-pink-500"><a href="https://www.instagram.com/ratnakar755/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
          </ul>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          {menuItems.map((item, index) => (
            <Link key={index} className={`nav-item ${activeIndex === index ? "active" : ""}`} onClick={() => handleClicked(index)} to={item.to}>
              {item.icon} <p>{item.label}</p>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
