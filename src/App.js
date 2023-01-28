import React from "react";
import { Header } from "./components/Header.js";
import { HeroArea } from "./components/HeroArea.js";
import { About } from "./components/About.js";
import { Services } from "./components/Services.js";
import { Projects } from "./components/Projects.js";
import { Contacts } from "./components/Contacts.js";

import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <HeroArea />
      <h1 id="about" className="title">
        About me
      </h1>
      <p className="description">My experience and education</p>
      <About />

      <h1 id="services" className="title">
        My services
      </h1>
      <p className="description">How can I help you?</p>
      <Services />
      <h1 id="projects" className="title">
        Projects
      </h1>
      <p className="description">Highlights of my best work</p>
      <Projects />
      <h1 id="contact" className="title">
        Let's connect
      </h1>
      <p className="description">I'm available to work!</p>
      <Contacts />
    </div>
  );
}
