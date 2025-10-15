import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import LearningPath from "./components/LearningPath.jsx";
import SoftSkills from "./components/SoftSkills.jsx";
import Languages from "./components/Languages";
import "./assests/css/index.css";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Section title="Career Objective">
        <p>
          Highly motivated Full Stack Developer passionate about building fast,
          responsive, and scalable applications. Skilled in JavaScript and backend
          architecture, with hands-on experience in real-world web apps. Seeking
          opportunities to grow in a collaborative and dynamic environment.
        </p>
      </Section>
      <Skills />
      <Projects />
      <div className="row">
        <div className="left-col">
          <Education />
        </div>
        <div className="right-col">
          <LearningPath />
        </div>
      </div>
      <div className="row">
        <div className="left-col">
          <SoftSkills />
        </div>
        <div className="right-col">
          <Languages />
        </div>
      </div>
      {/* <button className="print-button" onClick={() => window.print()}>
        🖨️ Print Resume
      </button> */}
    </div>
  );
}
