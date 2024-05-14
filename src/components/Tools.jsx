import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";

import Java from "../assets/java.png";
import Jpa from "../assets/jpa-hibernate.png";

import ReactImg from "../assets/react.png";

import Node from "../assets/node.png";
import Express from "../assets/express.png";

import Cplusplus from "../assets/c++.png";
import Csharp from "../assets/csharp.png";
import Python from "../assets/python.png";
import PHP from "../assets/php.png";

import VisualStudio from "../assets/visual-studio.png";
import VSCode from "../assets/vs-code.png";
import GitHub from "../assets/github.png";
import Gitea from "../assets/gitea.png";

import DotNet from "../assets/dotnet.png";

import Sql from "../assets/sql.png";
import Ssms from "../assets/ssms.png";

import Bootstrap from "../assets/bootstrap.png";
import Semantic from "../assets/semantic-ui.png";
import Material from "../assets/material.png";
import Tailwind from "../assets/tailwind.png";

import ChromeExt from "../assets/chrome-ext.png";

const Tools = () => {
  return (
    <div
      name="tools"
      className="w-full pb-8 xl:bg-[#0a192f] text-gray-300"
      style={{ background: "linear-gradient(#1d2d3a, #3f637b)" }}
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="mt-16">
          <p className="text-4xl font-bold inline border-b-4 border-orange-600 ">
            Tools of the Trade
          </p>
          <p className="py-4">
            // Everything I use to get the job done. Specialized in .NET,
            AngularJS, and J2EE technologies. With a wide breadth of knowledge
            in many other tools and languages.
          </p>
        </div>

        <div className="w-full grid grid-cols-3 text-sm sm:text-base sm:grid-cols-6 gap-4 text-center sm:py-8">
          <div className="shadow-md shadow-[#040c167a] pt-3 hover:scale-110 duration-500">
            <img className="w-12 sm:w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-3">HTML5</p>
          </div>
          <div className="shadow-md shadow-[#040c167a] pt-3 hover:scale-110 duration-500">
            <img className="w-12 sm:w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-3">CSS3</p>
          </div>
          <div className="shadow-md shadow-[#040c167a] pt-3 hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={JavaScript}
              alt="HTML icon"
            />
            <p className="my-3">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c167a] pt-3 hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={ReactImg}
              alt="HTML icon"
            />
            <p className="my-3">React.js</p>
          </div>
          <div className="shadow-md shadow-[#040c167a] pt-3 hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={DotNet}
              alt="HTML icon"
            />
            <p className="my-3">.NET</p>
          </div>
          <div className="shadow-md shadow-[#040c167a] pt-3 hover:scale-110 duration-500">
            <img className="w-12 sm:w-20 mx-auto" src={Sql} alt="HTML icon" />
            <p className="my-3">SQL</p>
          </div>
          <div className="shadow-md shadow-[#040c167a] pt-3 hover:scale-110 duration-500">
            <img className="w-12 sm:w-20 mx-auto" src={Ssms} alt="HTML icon" />
            <p className="my-3">SSMS</p>
          </div>
          <div className="shadow-md shadow-[#040c167a] pt-3 hover:scale-110 duration-500">
            <img className="w-12 sm:w-20 mx-auto" src={Java} alt="HTML icon" />
            <p className="my-3">Java</p>
          </div>
          <div className="shadow-md shadow-[#040c167a] pt-3 hover:scale-110 duration-500">
            <img className="w-12 sm:w-20 mx-auto" src={PHP} alt="HTML icon" />
            <p className="my-3">PHP</p>
          </div>
          <div className="shadow-md shadow-[#040c167a] pt-3 hover:scale-110 duration-500">
            <img className="w-12 sm:w-20 mx-auto" src={Jpa} alt="HTML icon" />
            <p className="my-3">JSP+ Hibernate</p>
          </div>
          <div className="shadow-md shadow-[#040c167a] pt-3 hover:scale-110 duration-500">
            <img className="w-12 sm:w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-3">Node.js</p>
          </div>
          <div className="shadow-md shadow-[#040c167a] pt-3 hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={Express}
              alt="HTML icon"
            />
            <p className="my-3">Express</p>
          </div>
          <div className="shadow-md shadow-[#040c167a] pt-3 hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={Cplusplus}
              alt="HTML icon"
            />
            <p className="my-3">C++</p>
          </div>
          <div className="shadow-md shadow-[#040c167a] pt-3 hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={Python}
              alt="HTML icon"
            />
            <p className="my-3">Python</p>
          </div>
          <div className="shadow-md shadow-[#040c167a] pt-3 hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={Csharp}
              alt="HTML icon"
            />
            <p className="my-3">C#</p>
          </div>
          <div className="shadow-md shadow-[#040c167a] pt-3 hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={Bootstrap}
              alt="HTML icon"
            />
            <p className="my-3 ">Bootstrap</p>
          </div>
          <div className="shadow-md shadow-[#040c167a] pt-3 hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={Semantic}
              alt="HTML icon"
            />
            <p className="my-3 mx-2">Semantic UI</p>
          </div>
          <div className="shadow-md shadow-[#040c167a] pt-3 hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={Material}
              alt="HTML icon"
            />
            <p className="my-3 mx-2">Material UI</p>
          </div>
          <div className="shadow-md shadow-[#040c167a] pt-3 hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={Tailwind}
              alt="HTML icon"
            />
            <p className="my-3 mx-2">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c167a] pt-3 hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={ChromeExt}
              alt="HTML icon"
            />
            <p className="my-3">Ext. Dev.</p>
          </div>
          <div className="shadow-md shadow-[#040c167a] pt-3 hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={VisualStudio}
              alt="HTML icon"
            />
            <p className="my-3 px-2">Visual Studio</p>
          </div>
          <div className="shadow-md shadow-[#040c167a] pt-3 hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={VSCode}
              alt="HTML icon"
            />
            <p className="my-3">VS Code</p>
          </div>
          <div className="shadow-md shadow-[#040c167a] pt-3 hover:scale-110 duration-500">
            <img
              className="w-12 sm:w-20 mx-auto"
              src={GitHub}
              alt="HTML icon"
            />
            <p className="my-3">Github</p>
          </div>
          <div className="shadow-md shadow-[#040c167a] pt-3 hover:scale-110 duration-500">
            <img className="w-12 sm:w-20 mx-auto" src={Gitea} alt="HTML icon" />
            <p className="my-3">Gitea</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
