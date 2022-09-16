import React from "react";
import Image from "next/image";
import Link from "next/link";

function Portfolio({ portfolioRef }) {
  const projects = [
    {
      id: 2,
      image: "/assets/portfolio2.jpg",
      title: "Simple Chat App",
      github: "https://github.com/xvferdy/simple-chat-app",
      demo: "https://simple-chat-app-xvferdy.netlify.app/",
    },

    {
      id: 1,
      image: "/assets/portfolio1.jpg",
      title: "NFT Preview Card Component",
      github: "https://github.com/xvferdy/fem-nft-preview-card-component",
      demo: "https://xvferdy.github.io/fem-nft-preview-card-component/",
    },
    {
      id: 6,
      image: "/assets/portfolio8.png",
      title: "Simple Food Ordering",
      github: "https://github.com/xvferdy/kedai-gelato",
      demo: "https://kedai-gelato.vercel.app/",
    },

    {
      id: 4,
      image: "/assets/portfolio4.jpg",
      title: "E-commerce Product Page",
      github: "https://github.com/xvferdy/fem-ecommerce-product-page",
      demo: "https://ecommerce-product-page-xvferdy.netlify.app/",
    },
    {
      id: 8,
      image: "/assets/portfolio9.png",
      title: "Mobile E-commerce",
      github: false,
      figma:
        "https://www.figma.com/file/yAkTg78KWB4BhffskTuGRk/EXERCISE-Design-System-%2B-Final-Composition-%2B-Prototypes?node-id=146%3A4583",
      demo: false,
    },
    {
      id: 7,
      image: "/assets/portfolio5.png",
      title: "Mobile E-commerce v.2",
      github: false,
      figma:
        "https://www.figma.com/file/IiWRIO3cO9FFH30XuBmn2p/Habitual-Redesign-High-Fidelity?node-id=111%3A4914",
      demo: false,
    },
    {
      id: 3,
      image: "/assets/portfolio3.jpg",
      title: "Time Tracking Dashboard",
      github: "https://github.com/xvferdy/fem-time-tracking-dashboard",
      demo: "https://time-tracking-dashboard-xvferdy.netlify.app/",
    },
    {
      id: 6,
      image: "/assets/portfolio6.png",
      title: "Food Ordering",
      github: false,
      figma:
        "https://www.figma.com/file/ufNsaM0iOBJIUCiVuHOwgR/DUMMY-PROJECT-mfood?node-id=152%3A278",
      demo: "https://mfood.vercel.app/",
    },
    {
      id: 5,
      image: "/assets/portfolio7.png",
      title: "Video Resume Landing Page",
      github: "https://github.com/xvferdy/video-resume-landing-page",
      demo: "https://video-resume-landing-page.vercel.app/",
    },
  ];
  return (
    <section id="portfolio" className="portfolio">
      <h5 ref={portfolioRef}>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((project) => (
          <article key={project.id} className="portfolio__item">
            <div className="portfolio__item-image" title={project.title}>
              {/* <img src={project.image} alt={project.title} /> */}
              <Image
                src={project.image}
                alt={project.title}
                width={644}
                height={483}
                layout="responsive"
              />
            </div>
            <h3>{project.title}</h3>
            <div className="portfolio__item-cta">
              <Link href={project.github || project.figma} passHref>
                <a className="btn" target="_blank">
                  {project.github ? "Github Repo" : "Figma Assets"}
                </a>
              </Link>
              {project.demo && (
                <Link href={project.demo} passHref>
                  <a className="btn btn--primary" target="_blank">
                    Live Demo
                  </a>
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
