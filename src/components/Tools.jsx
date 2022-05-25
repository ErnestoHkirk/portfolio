import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import AWS from "../assets/aws.png";
import Cplusplus from "../assets/c++.png";
import Python from "../assets/python.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import Csharp from "../assets/csharp.png";
import Bootstrap from "../assets/bootstrap.png";
import Semantic from "../assets/semantic-ui.png";
import ChromeExt from "../assets/chrome-ext.png";
import VisualStudio from "../assets/visual-studio.png";
import VSCode from "../assets/vs-code.png";
import Express from "../assets/express.png";
import DotNet from "../assets/dotnet.png";

const Tools = () => {
  return (
    <div
      name="tools"
      className="w-full h-full sm:h-screen bg-[#0a192f] text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="mt-16">
          <p className="text-4xl font-bold inline border-b-4 border-orange-600 ">
            Tools
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-6 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 sm:w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML5</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 sm:w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS3</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={JavaScript}
              alt="HTML icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={ReactImg}
              alt="HTML icon"
            />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={DotNet}
              alt="HTML icon"
            />
            <p className="my-4">.NET6</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 sm:w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={Express}
              alt="HTML icon"
            />
            <p className="my-4">EXPRESS JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={Cplusplus}
              alt="HTML icon"
            />
            <p className="my-4">C++</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={Python}
              alt="HTML icon"
            />
            <p className="my-4">PYTHON</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={Csharp}
              alt="HTML icon"
            />
            <p className="my-4">C#</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={Bootstrap}
              alt="HTML icon"
            />
            <p className="my-4">BOOTSTRAP</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={Semantic}
              alt="HTML icon"
            />
            <p className="my-4">SEMANTIC UI</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={ChromeExt}
              alt="HTML icon"
            />
            <p className="my-4">EXT. DEVELOPMENT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={VisualStudio}
              alt="HTML icon"
            />
            <p className="my-4">VISUAL STUDIO</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={VSCode}
              alt="HTML icon"
            />
            <p className="my-4">VS CODE</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={GitHub}
              alt="HTML icon"
            />
            <p className="my-4">GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
