import React from "react";
import Image from "next/image";
import Link from "next/link";

function Portfolio({ portfolioRef }) {
  const projects = [
    {
      id: 1,
      image: "/assets/portfolio1.jpg",
      title: "NFT Preview Card Component",
      github: "https://github.com/xvferdy/fem-nft-preview-card-component",
      demo: "https://xvferdy.github.io/fem-nft-preview-card-component/",
    },
    {
      id: 2,
      image: "/assets/portfolio2.jpg",
      title: "Simple Chat App",
      github: "https://github.com/xvferdy/simple-chat-app",
      demo: "https://simple-chat-app-xvferdy.netlify.app/",
    },
    {
      id: 3,
      image: "/assets/portfolio3.jpg",
      title: "Time Tracking Dashboard",
      github: "https://github.com/xvferdy/fem-time-tracking-dashboard",
      demo: "https://time-tracking-dashboard-xvferdy.netlify.app/",
    },
    {
      id: 4,
      image: "/assets/portfolio4.jpg",
      title: "E-commerce Product Page",
      github: "https://github.com/xvferdy/fem-ecommerce-product-page",
      demo: "https://ecommerce-product-page-xvferdy.netlify.app/",
    },
    {
      id: 5,
      image: "/assets/portfolio5.jpg",
      title: "Jojo tarot Card",
      github: "https://github.com/xvferdy/tarot-of-marseilles-sass",
      demo: "https://xvferdy.github.io/tarot-of-marseilles-sass/",
    },
    {
      id: 6,
      image: "/assets/portfolio6.jpg",
      title: "Simple Shopping Cart",
      github: "https://github.com/xvferdy/shopping-cart-my-ver",
      demo: "https://xvferdy.github.io/shopping-cart-my-ver/",
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
              <Link href={project.github} passHref>
                <a className="btn" target="_blank">
                  Github Repo
                </a>
              </Link>
              <Link href={project.demo} passHref>
                <a className="btn btn--primary" target="_blank">
                  Live Demo
                </a>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
