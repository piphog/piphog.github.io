import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 10, x: 0 },
  };

  const projects = [
    {
      year: "2023",
      title: "RxPotes",
      description:
        "Started a social media project with the purpose of using creative strategies to get a million views on one video. On our 10th video we reached 140 million views",
      image: "/images/rxpotes.jpg",
      tech: ["TikTok", "Social Media Strategy", "Content Creation"],
      links: {
        external: "https://www.tiktok.com/@rxpotes",
      },
    },
    {
      year: "2024",
      title: "WorkforceIQ.ai",
      description:
        "Currently developing a robust AI service using FastAPI and React for front and back end development.",
      image: "/images/workforceiq.jpg",
      tech: ["React", "FastAPI", "AI", "Python"],
      links: {
        github: "#",
        external: "#",
      },
    },
  ];

  return (
    <div className="projects-section container mt-5 pt-5" id="projects">
      {/* Main Heading */}
      <h2 className="section-title display-5 fw-bold text-center txt-white mb-5">
        Projects
      </h2>

      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-12 mb-3" key={index}>
            <motion.div
              className="project-card card shadow-sm mb-4"
              initial="hidden"
              animate="visible"
              variants={fadeInLeft}
              transition={{ duration: 0.5 }}
            >
              <div className="row g-0">
                {/* Left Side: Image */}
                <div className="col-md-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img rounded-start project-image"
                  />
                </div>

                {/* Right Side: Content */}
                <div className="col-md-8">
                  <div className="card-body ps-5">
                    <h3 className="project-title card-title txt-white">
                      {`0${index + 1}.`} {project.title}
                    </h3>
                    <span className="project-date txt-white mb-3 d-block">
                      {project.year}
                    </span>
                    <p className="project-description card-text txt-white">
                      {project.description}
                    </p>
                    {/* Badges for Keywords */}
                    <div className="keywords">

                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="badge bg-warning text-dark me-2"
                        >
                          {tech}
                        </span>
                      ))}

                      {project.links.github && (
                        <a
                          className="badge bg-primary mw-2"
                          href={project.links.github}
                          aria-label="GitHub Link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub />
                        </a>
                      )}
                      {project.links.external && (
                        <a
                          href={project.links.external}
                          className="badge bg-danger ms-2"
                          aria-label="External Link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
