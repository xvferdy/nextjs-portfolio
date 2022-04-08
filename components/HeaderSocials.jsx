import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaSteamSquare } from "react-icons/fa";
// import { FaSteamSquare } from "react-icons/fa";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/feed/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/xvferdy/" target="_blank">
        <FaGithub />
      </a>
      <a href="https://steamcommunity.com/id/xvferdy/" target="_blank">
        <FaSteamSquare />
      </a>
    </div>
  );
}

export default HeaderSocials;
