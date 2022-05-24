import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Tools from "./components/Tools";
import Work from "./components/Projects";
import Education from "./components/education/Education";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Tools />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
