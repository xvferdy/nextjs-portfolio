import Link from "next/link";
import React from "react";

function CTA() {
  return (
    <div className="cta">
      <Link href="/assets/cv4.pdf" passHref>
        <a className="btn" download target="_blank">
          Download CV
        </a>
      </Link>
      <Link href="#contact" passHref>
        <a className="btn btn--primary">Contact Me</a>
      </Link>
    </div>
  );
}

export default CTA;
