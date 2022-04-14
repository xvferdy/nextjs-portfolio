import React, { useState } from "react";

// react-icons
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFolderOpen,
} from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine, RiComputerLine } from "react-icons/ri";
import { VscFolderOpened } from "react-icons/vsc";
import { RiMessage2Line } from "react-icons/ri";

function Nav({
  headerActive,
  aboutActive,
  experienceActive,
  portfolioActive,
  contactActive,
}) {
  const [activeNav, setActiveNav] = useState("#");

  const handleActiveNav = (urlFragment) => {
    setActiveNav(urlFragment);
  };

  return (
    <nav className="nav">
      {/* header */}
      {headerActive ? (
        <a href="#" className="active">
          <AiOutlineHome />
        </a>
      ) : (
        <a href="#" onClick={() => handleActiveNav("#")}>
          <AiOutlineHome />
        </a>
      )}

      {/* about */}
      {aboutActive ? (
        <a href="#about" className="active">
          <AiOutlineUser />
        </a>
      ) : (
        <a href="#about" onClick={() => handleActiveNav("#about")}>
          <AiOutlineUser />
        </a>
      )}

      {/* experience */}
      {experienceActive ? (
        <a href="#experience" className="active">
          <RiComputerLine />
        </a>
      ) : (
        <a href="#experience" onClick={() => handleActiveNav("#experience")}>
          <RiComputerLine />
        </a>
      )}

      {/* portfoliio */}
      {portfolioActive ? (
        <a href="#portfolio" className="active">
          <VscFolderOpened />
        </a>
      ) : (
        <a href="#portfolio" onClick={() => handleActiveNav("#portfolio")}>
          <VscFolderOpened />
        </a>
      )}

      {/* contact */}
      {contactActive ? (
        <a href="#contact" className="active">
          <RiMessage2Line />
        </a>
      ) : (
        <a href="#contact" onClick={() => handleActiveNav("#contact")}>
          <RiMessage2Line />
        </a>
      )}
    </nav>
  );
}

export default Nav;
