import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import "./styles/App.css";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Certificates from "./Certificates";
import Contact from "./Contact";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;

