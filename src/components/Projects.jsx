import React from "react";
import pop from "../assets/pop.jpg";
import fauxVenture from "../assets/faux-venture.png";
import jurrasic from "../assets/jurrasic-park-wide.jpg";
import portfolio from "../assets/portfolio.png";
import gradetier from "../assets/gradetier.png";
import tweets from "../assets/tweets.png";
import roundabout from "../assets/roundabout.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full sm:h-screen text-gray-300"
      style={{ background: "linear-gradient(#3f637b, #1d2d3a)" }}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-16">
          <p className="text-4xl font-bold inline text-gray-300 border-b-4 border-orange-600">
            Projects
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${pop})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Prime Video - Rotten Tomato Overlay
              </span>
              <div className="pt-8 text-center">
                <a href="https://chrome.google.com/webstore/detail/amazon-prime-video-rotten/hfemgdpfoemphmhakjpcbepaggjmhjci">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/ErnestoHkirk/RTChrome">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${fauxVenture})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Faux Venture
              </span>
              <div className="pt-8 text-center">
                <a href="https://faux-venture.fly.dev/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/ErnestoHkirk/Faux-Venture">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${jurrasic})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Snapshot Collage
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/ErnestoHkirk/Snapshot-Collage">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${portfolio})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Personal Portfolio
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/ErnestoHkirk/portfolio">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${gradetier})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Rate My Professor - Gradetier GPA Viewer
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/ErnestoHkirk/cpsc_254_proj">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${tweets})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Twitter Sentiment Analysis Tool
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/ErnestoHkirk/TweetSentimentAnalysis">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${roundabout})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Roundabout Learning - Shellhacks 2020 Submission
              </span>
              <div className="pt-8 text-center">
                <a href="https://roundabout-learning.s3-us-west-1.amazonaws.com/index.html">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/ErnestoHkirk/roundabout-learning">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
