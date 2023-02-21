import "./App.css";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Hireme from "./components/Hireme/Hireme";
import Projects from "./components/Projects/Projects";
import Service from "./components/Service/Service";
import Skills from "./components/Skills/Skills";
import Testimonials from "./components/Testimonials/Testimonials";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Layouts/NavBar/NavBar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
 
  useEffect(() => {
    Aos.init({
      duration:1800,
      offset:100
    })
  
   
  }, [])
  
  return (
  <BrowserRouter>
      <div>
      <NavBar/>
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Testimonials />
      <Hireme />
      <Contact />
    </div>
  </BrowserRouter>
  );
};

export default App;
