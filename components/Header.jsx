import React from "react";

// components
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jhon Bambang</h1>
        <h5 className="text-light">Newbie Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src="/assets/me-ori.png" alt="me" />
        </div>
        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
