import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      year: '2023',
      title: 'RxPotes',
      description: 'Started a social media project with the purpose of using creative strategies to get a million views on one video.',
      image: '/images/rxpotes.jpg',
      tech: ['TikTok', 'Social Media Strategy', 'Content Creation'],
      links: {
        external: 'https://www.tiktok.com/@rxpotes'
      }
    },
    {
      year: '2024',
      title: 'WorkforceIQ.ai',
      description: 'Currently developing a robust AI service using FastAPI and React for front and back end development.',
      image: '/images/workforceiq.jpg',
      tech: ['React', 'FastAPI', 'AI', 'Python'],
      links: {
        github: '#',
        external: '#'
      }
    },
    
  ];

  return (
    <section id="projects">
      <h2 className="numbered-heading">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-content">
            <div className="project-header">
              <p className="project-overline">{project.year}</p>
              <h3 className="project-title">
                <span className="project-number">{`0${index + 1}.`}</span> {project.title}
              </h3>
              <div className="project-links">
                {project.links.github && (
                  <a href={project.links.github} aria-label="GitHub Link" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                )}
                {project.links.external && (
                  <a href={project.links.external} aria-label="External Link" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
            <div className="project-description">
              <p>{project.description}</p>
            </div>
            <ul className="project-tech-list right-aligned">
              {project.tech.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;