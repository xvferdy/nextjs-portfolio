import React, { useState } from "react";
import Link from "next/link";

// react-icons
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
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
        <Link href="#" passHref>
          <a className="active">
            <AiOutlineHome />
          </a>
        </Link>
      ) : (
        <Link href="#" passHref>
          <a onClick={() => handleActiveNav("#")}>
            <AiOutlineHome />
          </a>
        </Link>
      )}

      {/* about */}
      {aboutActive ? (
        <Link href="#about" passHref>
          <a className="active">
            <AiOutlineUser />
          </a>
        </Link>
      ) : (
        <Link href="#about" passHref>
          <a onClick={() => handleActiveNav("#about")}>
            <AiOutlineUser />
          </a>
        </Link>
      )}

      {/* experience */}
      {experienceActive ? (
        <Link href="#experience" passHref>
          <a className="active">
            <RiComputerLine />
          </a>
        </Link>
      ) : (
        <Link href="#experience" passHref>
          <a onClick={() => handleActiveNav("#experience")}>
            <RiComputerLine />
          </a>
        </Link>
      )}

      {/* portfoliio */}
      {portfolioActive ? (
        <Link href="#portfolio" passHref>
          <a className="active">
            <VscFolderOpened />
          </a>
        </Link>
      ) : (
        <Link href="#portfolio" passHref>
          <a onClick={() => handleActiveNav("#portfolio")}>
            <VscFolderOpened />
          </a>
        </Link>
      )}

      {/* contact */}
      {contactActive ? (
        <Link href="#contact" passHref>
          <a className="active">
            <RiMessage2Line />
          </a>
        </Link>
      ) : (
        <Link href="#contact" passHref>
          <a onClick={() => handleActiveNav("#contact")}>
            <RiMessage2Line />
          </a>
        </Link>
      )}
    </nav>
  );
}

export default Nav;
