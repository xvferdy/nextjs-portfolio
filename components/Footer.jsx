import React from "react";
import Link from "next/link";

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
      <Link href="#" passHref>
        <a className="footer__logo">Berlianto F. P.</a>
      </Link>
      <ul className="permalinks">
        <li>
          <Link href="#" passHref>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="#about" passHref>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="#experience" passHref>
            <a>Experience</a>
          </Link>
        </li>
        <li>
          <Link href="#services" passHref>
            <a>Services</a>
          </Link>
        </li>
        <li>
          <Link href="#portfolio" passHref>
            <a>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="#quotes" passHref>
            <a>Quotes</a>
          </Link>
        </li>
        <li>
          <Link href="#contact" passHref>
            <a>Contact</a>
          </Link>
        </li>
      </ul>

      <div className="footer__socials">
        <Link
          href="https://www.linkedin.com/in/berlianto-ferdynand-pongbubun/"
          passHref
        >
          <a target="_blank">
            <BsLinkedin />
          </a>
        </Link>
        <Link href="https://github.com/xvferdy/" passHref>
          <a target="_blank">
            <FaGithub />
          </a>
        </Link>
        <Link href="https://www.frontendmentor.io/profile/xvferdy" passHref>
          <a target="_blank">
            <SiFrontendmentor />
          </a>
        </Link>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2022 All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
