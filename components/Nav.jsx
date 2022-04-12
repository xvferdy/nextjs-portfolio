import React, { useState } from "react";

// react-icons
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

function Nav({
  headerActive,
  aboutActive,
  experienceActive,
  serviceActive,
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
          <BiBook />
        </a>
      ) : (
        <a href="#experience" onClick={() => handleActiveNav("#experience")}>
          <BiBook />
        </a>
      )}

      {/* services */}
      {serviceActive ? (
        <a href="#services" className="active">
          <RiServiceLine />
        </a>
      ) : (
        <a href="#services" onClick={() => handleActiveNav("#services")}>
          <RiServiceLine />
        </a>
      )}

      {/* contact */}
      {contactActive ? (
        <a href="#contact" className="active">
          <BiMessageSquareDetail />
        </a>
      ) : (
        <a href="#contact" onClick={() => handleActiveNav("#contact")}>
          <BiMessageSquareDetail />
        </a>
      )}
    </nav>
  );
}

export default Nav;
