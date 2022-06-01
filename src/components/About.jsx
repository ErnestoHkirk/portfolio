import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen text-gray-300"
      style={{ background: "linear-gradient(#1d2d3a, #0a192f)" }} // #014547)
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-6">
            <p className="text-4xl font-bold inline border-b-4 border-orange-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Ernesto! Pleased to meet you. Feel free to take a look
              around.
            </p>
          </div>
          <div>
            <p>
              I'm passionate about building excellent software that improves the
              lives of those around me, with proficiency in HTML, CSS, JavaScript,
              React.js, and jQuery. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
