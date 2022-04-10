import React from "react";
// import CV from "../public/assets/cv-berlianto.pdf";

function CTA() {
  return (
    <div className="cta">
      <a
        className="btn"
        href="/assets/cv-berlianto.pdf"
        download
        target="_blank"
      >
        Download CV
      </a>
      <a className="btn btn--primary" href="#contact">
        Contact Me
      </a>
    </div>
  );
}

export default CTA;
