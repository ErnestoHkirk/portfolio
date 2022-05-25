import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import mountains from "../assets/mountains.jpg";
import pop from "../assets/pop.jpg";

export default function ProjectSwiper() {
  return (
    <div
      className="bg-red-600 flex flex-col pt-32 w-full h-screen"
      name="projects"
    >
      <h1 className="flex flex-col items-center mb-4 font-bold text-4xl">
        Projects
      </h1>
      <Swiper
        modules={[Navigation, EffectFade, Pagination]}
        speed={800}
        slidesPerView={1}
        navigation
        loop
        effect
        pagination={true}
        className="bg-red-500 flex flex-col mt-2 w-3/4 object-cover"
      >
        <SwiperSlide style={{ backgroundPosition: "center" }}>
          <div style={{ position: "relative" }}>
            <img src={pop} alt="mountains" />
            <p className="text-white absolute bottom-32 font-bold left-8 text-4xl">
              Amazon Prime Video - Rotten Tomatoes Overlay
            </p>
            <a
              href="https://chrome.google.com/webstore/detail/amazon-prime-video-rotten/hfemgdpfoemphmhakjpcbepaggjmhjci"
              className="text-white absolute bottom-24 left-8 text-2xl hover:underline"
            >
              Project Deployment
            </a>
            <a
              href="https://github.com/ErnestoHkirk/RTChrome"
              className="text-white absolute bottom-16 left-8 text-2xl hover:underline"
            >
              Github Repository
            </a>
            <p className="text-white absolute bottom-8 text-2xl left-8">
              Overlays Amazon Prime Video™ with Rotten Tomatoes™ movie and TV
              ratings, with over 3500+ monthly active users.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
