import React from "react";
import Link from "next/link";

// react-icons
import { BsLinkedin } from "react-icons/bs";
import { SiFrontendmentor } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function HeaderSocials() {
  return (
    <div className="header__socials">
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
      <Link href="https://www.frontendmentor.io/profile/xvferdy">
        <a target="_blank">
          <SiFrontendmentor />
        </a>
      </Link>
    </div>
  );
}

export default HeaderSocials;
