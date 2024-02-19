import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { BsBoxArrowInUpRight } from "react-icons/bs";

export default function ProjectSwiper() {
  return (
    <div
      className="flex flex-col pt-32 w-full h-screen"
      name="projects"
      style={{ background: "linear-gradient(#3f637b, #1d2d3a)" }}
    >
      <h1 className="flex flex-col mr-64 ml-64 items-center mb-4 pb-2 text-white font-bold text-4xl border-b-4 border-orange-600">
        Projects
      </h1>
      <Swiper
        modules={[Navigation, EffectFade, Pagination, Autoplay]}
        speed={800}
        slidesPerView={1}
        navigation
        loop
        effect
        pagination={{
          type: "fraction",
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        className="flex flex-col mt-2 w-7/12 text-white "
      >
        <SwiperSlide>
          <div style={{ position: "relative" }}>
            <div className="proj1"></div>
            <p className="text-white absolute bottom-40 font-bold left-8 text-4xl">
              Amazon Prime Video - Rotten Tomatoes Overlay
            </p>
            <a
              href="https://chrome.google.com/webstore/detail/amazon-prime-video-rotten/hfemgdpfoemphmhakjpcbepaggjmhjci"
              className="flex text-white absolute bottom-32 left-8 text-2xl hover:underline"
            >
              Project Deployment
              <BsBoxArrowInUpRight className="ml-1 mt-1" />
            </a>
            <a
              href="https://github.com/ErnestoHkirk/RTChrome"
              className="flex text-white absolute bottom-24 left-8 text-2xl hover:underline"
            >
              Github Repository
              <BsBoxArrowInUpRight className="ml-1 mt-1" />
            </a>
            <p className="text-white absolute bottom-8 text-2xl left-8">
              A chrome extension that overlayed Amazon Prime Video™ with Rotten
              Tomatoes™ movie and TV show ratings, with over 3500+ monthly
              active users. Built with javascript.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ position: "relative" }}>
            <div className="proj2"></div>
            <p className="text-white absolute bottom-40 font-bold left-8 text-4xl">
              Faux Venture
            </p>
            <a
              href="https://faux-venture.fly.dev/"
              className="flex text-white absolute bottom-32 left-8 text-2xl hover:underline"
            >
              Project Deployment
              <BsBoxArrowInUpRight className="ml-1 mt-1" />
            </a>
            <a
              href="https://github.com/ErnestoHkirk/ReStored"
              className="flex text-white absolute bottom-24 left-8 text-2xl hover:underline"
            >
              Github Repository
              <BsBoxArrowInUpRight className="ml-1 mt-1" />
            </a>
            <p className="text-white absolute bottom-8 text-2xl left-8">
              A fully functional e-commerce shell site. Built with React,
              React-Redux, Typescript, Material-UI, C#, .NET7, and Entity
              Framework.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ position: "relative" }}>
            <div className="proj3"></div>
            <p className="text-white absolute bottom-32 font-bold left-8 text-4xl">
              Snapshot Collage
            </p>
            <a
              href="https://github.com/ErnestoHkirk/Snapshot-Collage"
              className="flex text-white absolute bottom-24 left-8 text-2xl hover:underline"
            >
              Github Repository
              <BsBoxArrowInUpRight className="ml-1 mt-1" />
            </a>
            <p className="text-white absolute bottom-8 text-2xl left-8">
              An image searcher/collage creator built to streamline the process
              of downloading multiple images. Built with Semantic-UI, React, and
              Node.js.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ position: "relative" }}>
            <div className="proj4"></div>
            <p className="text-white absolute bottom-32 font-bold left-8 text-4xl">
              Personal Portfolio
            </p>
            <a
              href="https://github.com/ErnestoHkirk/portfolio"
              className="flex text-white absolute bottom-24 left-8 text-2xl hover:underline"
            >
              Github Repository
              <BsBoxArrowInUpRight className="ml-1 mt-1" />
            </a>
            <p className="text-white absolute bottom-8 text-2xl left-8">
              My personal website, existing to showcase my talents and
              abilities. Built with React, React-Swiper, Tailwind CSS, and
              Bootstrap UI.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ position: "relative" }}>
            <div className="proj5"></div>
            <p className="text-white absolute bottom-32 font-bold left-8 text-4xl">
              Rate My Professor - Gradetier GPA Viewer
            </p>
            <a
              href="https://github.com/ErnestoHkirk/cpsc_254_proj"
              className="flex text-white absolute bottom-24 left-8 text-2xl hover:underline"
            >
              Github Repository
              <BsBoxArrowInUpRight className="ml-1 mt-1" />
            </a>
            <p className="text-white absolute bottom-8 text-2xl left-8">
              This chrome extension provides the average class GPA's from Fall
              of 2018 onto RateMyProfessor.com for CSUF professors. Build with
              Javascript.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ position: "relative" }}>
            <div className="proj6"></div>
            <p className="text-white absolute bottom-40 font-bold left-8 text-4xl">
              Roundabout Learning - Shellhacks 2020 Submission
            </p>
            <a
              href="https://roundabout-learning.s3-us-west-1.amazonaws.com/index.html"
              className="flex text-white absolute bottom-32 left-8 text-2xl hover:underline"
            >
              Project Deployment
              <BsBoxArrowInUpRight className="ml-1 mt-1" />
            </a>
            <a
              href="https://github.com/ErnestoHkirk/roundabout-learning"
              className="flex text-white absolute bottom-24 left-8 text-2xl hover:underline"
            >
              Github Repository
              <BsBoxArrowInUpRight className="ml-1 mt-1" />
            </a>
            <p className="text-white absolute bottom-8 text-2xl left-8">
              Collaborated virtually in a 48 hour hackathon to create a project
              centered around improving the student-teacher virtual classroom
              experience. Built with Javascript.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ position: "relative" }}>
            <div className="proj7"></div>
            <p className="text-white absolute bottom-32 font-bold left-8 text-4xl">
              Twitter Sentiment Analysis Tool
            </p>
            <a
              href="https://github.com/ErnestoHkirk/TweetSentimentAnalysis"
              className="flex text-white absolute bottom-24 left-8 text-2xl hover:underline"
            >
              Github Repository
              <BsBoxArrowInUpRight className="ml-1 mt-1" />
            </a>
            <p className="text-white absolute bottom-8 text-2xl left-8">
              Application that analyzes, categorizes, and visualizes tweet
              sentiment. Built with AWS Amazon Comprehend, Python, Twitter’s
              API, and plot.ly.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
