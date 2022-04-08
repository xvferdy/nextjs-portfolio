import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  const handleActiveNav = (urlFragment) => {
    setActiveNav(urlFragment);
  };
  return (
    <nav className="nav">
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => handleActiveNav("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => handleActiveNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => handleActiveNav("#experience")}
      >
        <BiBook />
      </a>
      <a
        href="#service"
        className={activeNav === "#service" ? "active" : ""}
        onClick={() => handleActiveNav("#service")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => handleActiveNav("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
