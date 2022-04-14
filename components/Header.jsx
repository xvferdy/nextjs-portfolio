import React from "react";
import Image from "next/image";
import Link from "next/link";

// components
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { MdOutlineWavingHand } from "react-icons/md";

function Header({ headerRef }) {
  return (
    <header className="header">
      <div className="container header__container">
        <h5 ref={headerRef}>
          Hello I'm <MdOutlineWavingHand />
        </h5>
        <h1>Berlianto F. P.</h1>
        <h5 className="text-light">Frontend Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          {/* <img src="/assets/me.png" alt="me" /> */}
          <Image src="/assets/me.png" width={304} height={400} alt="me" />
        </div>
        <Link href="#contact" passHref>
          <a className="scroll-down">Scroll Down</a>
        </Link>
      </div>
    </header>
  );
}

export default Header;
