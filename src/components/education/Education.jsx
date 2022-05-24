import React from "react";
import CSUF from "../../assets/csuf.png";
import FullColl from "../../assets/fullerton-collegev2.png";
import { Tags } from "../education/AccordionCardInfo";
import { Coursework } from "../education/AccordionCardInfo";
import AccordionCard from "./AccordionCard";

const Education = () => {
  var id = 0;
  var tags = Tags;
  var coursework = Coursework;

  console.log(tags);
  console.log(coursework);

  const accordionSlice = coursework.map((course) => {
    ++id;
    //console.log(id);
    if (course) {
      console.log(course[0]);
      return <AccordionCard key={id} id={id} course={course} tags={tags} />;
    }
  });

  return (
    <div
      name="education"
      className="w-full h-full pt-24 sm:h-screen text-gray-300 block sm:flex sm:flex-row justify-center items-center"
      style={{ background: "linear-gradient(#1d2d3a, #015247)" }}
    >
      <div
        className="pl-4 pr-4  w-full ml-64 sm:w-1/2 block sm:flex sm:flex-col"
        name="half container"
      >
        <h1 className="text-4xl font-bold inline border-b-4 border-orange-600">
          Education
        </h1>
        <div name="spacer" className="mb-4" />
        <div className="items-center flex flex-col sm:flex-row p-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="sm:pr-12" name="titan-image">
            <img
              className="w-32 sm:w-32 rounded-2xl mb-4 sm:mb-0"
              src={CSUF}
              alt="HTML icon"
            />
          </div>
          <div name="blurbs">
            <p className="text-2xl text-decoration-line: underline">
              California State University, Fullerton
            </p>
            <p className="text-xl">
              Bachelor of Science - BS, Computer Science
            </p>
            <p className="text-xl"> Dec, 2021</p>
          </div>
        </div>
        <div name="spacer" className="mb-4" />
        <div className="items-center flex flex-col sm:flex-row p-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="sm:pr-12" name="titan-image">
            <img
              className="w-32 sm:w-32 rounded-2xl mb-4 sm:mb-0"
              src={FullColl}
              alt="HTML icon"
            />
          </div>
          <div name="blurbs">
            <p className="text-2xl text-decoration-line: underline">
              Fullerton College
            </p>
            <p className="text-xl">
              Associate of Science - AS, Computer Science
            </p>
            <p className="text-xl"> Dec, 2019</p>
          </div>
        </div>
      </div>
      <div
        className="bg-gray-300 w-full pt-4 sm:w-1/2 mr-64 flex flex-col rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500"
        name="half container"
      >
        <div className="text-4xl font-bold pb-2 text-gray-700 w-full flex justify-center">
          <h1>Computer Science Coursework</h1>
        </div>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          {accordionSlice}
        </div>
        <div
          name="spacer"
          className="pb-4 text-red-500 w-full flex justify-center"
        ></div>
      </div>
    </div>
  );
};

export default Education;
