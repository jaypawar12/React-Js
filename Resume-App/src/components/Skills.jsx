import React from "react";
import Section from "./Section";

export default function Skills() {
  return (
    <Section title="Technical Skills">
      <div className="row">
        <div className="left-col">
          <ul>
            <li><strong>Languages:</strong> HTML5, CSS3, JavaScript, jQuery, C, C++</li>
            <li><strong>Frontend:</strong> Bootstrap, EJS, Responsive Design</li>
            <li><strong>Backend:</strong> Node.js, Express.js</li>
          </ul>
        </div>
        <div className="right-col">
          <ul>
            <li><strong>Database:</strong> MongoDB</li>
            <li><strong>Version Control:</strong> Git, GitHub</li>
            <li><strong>Other:</strong> RESTful APIs, MVC Architecture, Local Storage</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
