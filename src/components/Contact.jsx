import React, { useState, useEffect } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineProfile } from "react-icons/ai";

const Contact = () => {
  const [rows, setRows] = useState(5);

  const updateMedia = () => {
    if (window.innerWidth > 1000) {
      setRows(10);
    } else {
      setRows(5);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
      style={{ background: "linear-gradient(#1d2d3a, #0a192f)" }}
    >
      <form
        method="POST"
        action="https://getform.io/f/cd41b177-5ecd-4a5c-9dfb-c9e017473d8b"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className=" pt-4">
          <p className="text-4xl font-bold inline border-b-4 border-orange-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email -
            Ernesto_Hooghkirk@csu.fullerton.edu
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows={rows}
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-red-500 hover:border-red-600 px-4 py-3 my-3 md:my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
        <div className="flex flex-col sm:flex-row text-gray-400 justify-around items-center sm:mt-16">
          <a
            href="https://www.linkedin.com/in/ernesto-hooghkirk/"
            className="flex text-white text-2xl hover:underline"
          >
            <AiFillLinkedin className="mt-1 mr-2" />
            Linkedin
          </a>

          <a
            href="https://github.com/ErnestoHkirk/"
            className="flex text-white text-2xl hover:underline"
          >
            <AiFillGithub className="mt-1 mr-2" />
            Github
          </a>

          <a
            href="https://drive.google.com/file/d/1gmgFygN_ZB0GAKcFgf2mXiDdrHNYRieP/view?usp=sharing"
            className="flex text-white text-2xl hover:underline"
          >
            <AiOutlineProfile className="mt-1 mr-2" />
            Resume
          </a>
        </div>
      </form>
    </div>
  );
};

export default Contact;
