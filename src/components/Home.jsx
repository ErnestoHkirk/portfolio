import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-[#0a192f] sm:bg-cover sm:bg-[url('/src/assets/mountains.jpg')]"
      //style={{ backgroundImage: `url(${mountain})`, backgroundSize: "cover" }}
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="font-bold text-orange-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#c6c9d4] sm:text-[#5e6579]">
          Ernesto Hooghkirk
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#9499a8] sm:text-[#717a94]">
          I'm a Software Developer.
        </h2>
        <p className="text-lg font-bold text-gray-500 sm:text-gray-800 py-4 max-w-[700px]">
          I’m a software developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications that utilize .NET and
          React.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={100}>
            <button className="bg-red-500 text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
