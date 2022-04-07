import React from "react";
import me from "../public/assets/me-ori.png";
import Image from "next/image";

function About() {
  return (
    <section className="about container">
      <h2>About</h2>
      <button className="btn">clixksss</button>
      <button className="btn btn--primary">primary</button>
      <div className="inline">
        {/* <img src="/assets/me-ori.png" alt="" /> */}
        <Image
          src="/assets/me-ori.png"
          width={300}
          height={300}
          alt="aaaaaaaaaaaaaaaa"
        />
      </div>
      <p>hello</p>
    </section>
  );
}

export default About;
