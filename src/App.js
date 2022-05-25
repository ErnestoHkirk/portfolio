import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Education from "./components/education/Education";
import ProjectSwiper from "./components/ProjectSwiper";
import React, { useState, useEffect } from "react";

function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1500);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1500);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Tools />
      <div>{isDesktop ? <ProjectSwiper /> : <Projects />}</div>
      <Contact />
    </div>
  );
}

export default App;
