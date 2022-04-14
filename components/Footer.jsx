import React from "react";

// react-icons
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

import { BsLinkedin } from "react-icons/bs";
import { SiFrontendmentor } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <a href="#" className="footer__logo">
        Berlianto F. P.
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#quotes">Quotes</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
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

      <div className="footer__copyright">
        <small>&copy; 2022 All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
