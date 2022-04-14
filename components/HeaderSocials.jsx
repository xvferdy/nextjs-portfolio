import React from "react";

// react-icons
import { BsLinkedin } from "react-icons/bs";
import { SiFrontendmentor } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/berlianto-ferdynand-pongbubun/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/xvferdy/" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.frontendmentor.io/profile/xvferdy" target="_blank">
        <SiFrontendmentor />
      </a>
    </div>
  );
}

export default HeaderSocials;
