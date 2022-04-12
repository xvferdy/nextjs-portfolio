import React from "react";
import { BiCheck } from "react-icons/bi";

function Service({ servicesRef }) {
  return (
    <section id="services" className="services">
      <h5>What I Over</h5>
      <h2>Services</h2>
      <div ref={servicesRef} className="container services__container">
        {/* UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Sit amet consectetur adipisicing elit. Ea, velit!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
          </ul>
        </article>

        {/* Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Sit amet consectetur adipisicing elit. Ea, velit!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Pariatur pariatur deserunt aliqua minim aliqua.</p>
            </li>
          </ul>
        </article>

        {/* Content Creation */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Pariatur pariatur deserunt aliqua minim aliqua.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Service;
