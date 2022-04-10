import React from "react";

function Portfolio() {
  const projects = [
    {
      id: 1,
      image: "/assets/portfolio1-ori.jpg",
      title: "Lady bugs .env",
      github: "https://github.com/xvferdy",
      demo: "https://www.google.com/",
    },
    {
      id: 2,
      image: "/assets/portfolio2-ori.jpg",
      title: "Coca-cola Landingpage",
      github: "https://github.com/xvferdy",
      demo: "https://www.google.com/",
    },
    {
      id: 3,
      image: "/assets/portfolio3-ori.jpg",
      title: "Resume Viewer",
      github: "https://github.com/xvferdy",
      demo: "https://www.google.com/",
    },
    {
      id: 4,
      image: "/assets/portfolio4-ori.jpg",
      title: "MySql Lite With WhatsApp Lite",
      github: "https://github.com/xvferdy",
      demo: "https://www.google.com/",
    },
    {
      id: 5,
      image: "/assets/portfolio5-ori.png",
      title: "Narancia",
      github: "https://github.com/xvferdy",
      demo: "https://www.google.com/",
    },
    {
      id: 6,
      image: "/assets/portfolio6-ori.jpg",
      title: "Preformatter Generator",
      github: "https://github.com/xvferdy",
      demo: "https://www.google.com/",
    },
  ];
  return (
    <section id="portfolio" className="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((project) => (
          <article key={project.id} className="portfolio__item">
            <div className="portfolio__item-image" title={project.title}>
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <div className="portfolio__item-cta">
              <a className="btn" href={project.github} target="_blank">
                Github Repo
              </a>
              <a
                className="btn btn--primary"
                href={project.demo}
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
