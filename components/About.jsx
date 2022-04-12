import React from "react";

// react-icons
import { FaAward } from "react-icons/fa";
import { GoTasklist } from "react-icons/go";
import { BsHeadset } from "react-icons/bs";

function About({ aboutRef }) {
  return (
    <section id="about" className="about">
      <h5 ref={aboutRef}>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="/assets/me-about.png" alt="Photo of Berlianto" />
            {/* <img src="/assets/me-about-ori.jpg" alt="Photo of Berlianto" /> */}
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Coding</small>
            </article>
            <article className="about__card">
              <GoTasklist className="about__icon" />
              <h5>Challenge</h5>
              <small>10+ Projects</small>
            </article>
            <article className="about__card">
              <BsHeadset className="about__icon" />
              <h5>Support</h5>
              <small>Online 24/7</small>
            </article>
          </div>
          <p>
            I love learning new stuff with better ways like user experiences
            with clean, efficient, and scalable code. I consider looking for
            opportunities to work with those who are willing to share their
            knowledge as much as I want to learn. At the end of the day, my
            primary goal is to create something beautiful with cool people that
            bring out the best in me.
            <span>
              {" "}
              When I'm not in front of a computer screen, I'm probably eating,
              looking up to the sky, watching movies, or sleeping in the
              morning.
            </span>
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
