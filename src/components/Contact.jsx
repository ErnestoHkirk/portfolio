import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineProfile } from "react-icons/ai";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
      style={{ background: "linear-gradient(#1d2d3a, #0a192f)" }}
    >
      <form
        method="POST"
        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className=" pt-4">
          <p className="text-4xl font-bold inline border-b-4 border-orange-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email -
            hooghkirk.e@gmail.com
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
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-red-500 hover:border-red-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
        <div className="flex flex-row text-gray-400 justify-around items-center mt-10">
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
            href="https://docs.google.com/document/d/1Dq-DSEiQFya2Lv4PPztRPCDTPa61EgMG361fVy-bors/edit?usp=sharing"
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
