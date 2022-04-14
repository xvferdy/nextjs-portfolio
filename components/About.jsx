import React from "react";
import Image from "next/image";

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
            {/* <img src="/assets/me-about.png" alt="Photo of Berlianto" /> */}
            <Image
              src="/assets/me-about.png"
              width={457}
              height={535}
              alt="Photo of Berlianto"
            />
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
            I learn programming for the first time in 2019, and in 2021 I'm
            focusing web development on the client side, and until now I'm still
            learning it. I love learning new stuff with better ways like user
            experiences with clean, efficient, and scalable code. Sometimes I do
            frontend challenges by making user interface at{" "}
            <a>frontendmentor.io</a> At the end of the day, my primary goal is
            to create something beautiful with cool people that bring out the
            best in me.
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
