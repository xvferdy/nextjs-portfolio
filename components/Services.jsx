import React from "react";
import { BiCheck } from "react-icons/bi";

function Service() {
  return (
    <section id="services" className="services">
      <h5>What I Over</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>UX research.</p>
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
              <p>
                Translating mock-ups into up running web using React JS and
                Sass.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building websites that are responsive and usable.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Fixing bugs and technical issues before and after deploying.
              </p>
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
              <p>Documenting the codes using Markup language.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Service;
