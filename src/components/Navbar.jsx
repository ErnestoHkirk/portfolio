import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import InitialsV3 from "../assets/initialsv3.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="z-10 fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0e274c] text-gray-300">
      <div>
        <img src={InitialsV3} alt="Logo" style={{ width: "50px" }} />
      </div>

      {/* Menu */}
      <ul className="opacity-75 hidden md:flex text-2xl">
        <li className="hover:text-orange-600 duration-300">
          <Link to="home" smooth={true} duration={50}>
            Home
          </Link>
        </li>
        <li className="hover:text-orange-600 duration-300">
          <Link to="about" smooth={true} duration={50}>
            About
          </Link>
        </li>
        <li className="hover:text-orange-600 duration-300">
          <Link to="education" smooth={true} duration={50}>
            Education
          </Link>
        </li>
        <li className="hover:text-orange-600 duration-300">
          <Link to="tools" smooth={true} duration={50}>
            Tools
          </Link>
        </li>
        <li className="hover:text-orange-600 duration-300">
          <Link to="projects" smooth={true} duration={50}>
            Projects
          </Link>
        </li>
        <li className="hover:text-orange-600 duration-300">
          <Link to="contact" smooth={true} duration={50}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={50}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={50}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="education"
            smooth={true}
            duration={500}
          >
            Education
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="tools" smooth={true} duration={50}>
            Tools
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={50}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden xl:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ">
            <a
              className="hover:text-gray-300 flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/ernesto-hooghkirk/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="hover:text-gray-300 flex justify-between items-center w-full text-gray-300"
              href="https://github.com/ErnestoHkirk"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="hover:text-gray-300 flex justify-between items-center w-full text-gray-300"
              href="mailto:hooghkirk.e@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="hover:text-gray-300 flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1W1Ba7towkPGBIGXdZyr-xmqAwL7xgvX-/view?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
