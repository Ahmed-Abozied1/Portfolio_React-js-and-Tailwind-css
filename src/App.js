import "./App.css";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Hireme from "./components/Hireme/Hireme";
import Projects from "./components/Projects/Projects";
import Service from "./components/Service/Service";
import Skills from "./components/Skills/Skills";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Testimonials />
      <Hireme />
      <Contact />
    </div>
  );
};

export default App;
