import React from "react";
import me from "../public/assets/me-ori.png";
import Image from "next/image";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about" className="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            {/* <img src="/assets/me-about-ori.jpg" alt="Photo of Berlianto" /> */}
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Coding</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Client</h5>
              <small>100+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Mollit sunt duis cupidatat consequat laboris elit deserunt
            consectetur Lorem sit duis. Nisi laboris cillum amet quis nisi
            velit. Et ad consectetur laboris ullamco eiusmod sit voluptate ea
            velit Lorem duis velit occaecat. Et duis commodo deserunt proident
            pariatur nulla eiusmod non tempor. Enim duis dolore sunt enim dolor
            quis occaecat eiusmod velit nulla. Aliquip ad pariatur incididunt
            mollit mollit fugiat sit ex consectetur culpa non aliquip mollit.
          </p>
          <a href="#contact" className="btn btn--primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
