import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

function Experience() {
  const workExperience = {
    company: "Recovery Logistics Inc",
    position: "Senior Program Manager",
    duration: "2012 - Present",
    responsibilities: [
      "Developed and refined best practices across many operational roles",
      "Recruited and managed high-performing teams for complex recovery efforts",
      "Managed end-to-end control of all event based cash, labor hours, and expenses"
    ]
  };

  const hurricaneEvents = [
    {
      year: '2012',
      title: 'Hurricane Sandy',
      description: 'First major event overseeing a team for finance admin operations. Coordinated day to day on-site operations for AT&T cell tower recover in Bensalem, PA. Laid groundwork for streamlining project closeout and billing processes',
      media: {
        type: 'video',
        src: '/videos/hurricane_sandy_loop.mp4'
      },
      details: ['Category 3', '115 mph', '940 mbar'],
      link: '#'
    },
    {
      year: '2017',
      title: 'Hurricane Mathew',
      description: 'Due to significant flooding this was a tricky project. Assisted in telecom and power utility recovery operations. This storm we tested and fine-tuned project closeout and billing processes. The company sold to a new owner shortly after this event',
      media: {
        type: 'image',
        src: '/images/hurricane_irma.jpg'
      },
      details: ['Category 5', '165 mph', '934 mbar'],
      link: '#'
    },
    {
      year: '2017',
      title: 'Hurricane Maria',
      description: 'This event was highly unique project assisting Entergy and other companies on-site in Puerto Rico. During this event I was able to lay groundwork for new audit procedures',
      media: {
        type: 'image',
        src: '/images/hurricane_maria.jpg'
      },
      details: ['Category 5', '175 mph', '908 mbar'],
      link: '#'
    },
    {
      year: '2018',
      title: 'Hurricane Florence',
      description: 'An event right in our back yard. During this project I led the implementation of a company wide web app transition encompassing all previous operational enhancements',
      media: {
        type: 'image',
        src: '/images/hurricane_florence.jpg'
      },
      details: ['Category 4', '150 mph', '937 mbar'],
      link: '#'
    },
    {
      year: '2018',
      title: 'Hurricane Michael',
      description: 'This project really helped test our response capabilities however it all gave me the opportunity to test and address web app pain points. The company changed hands again during this year',
      media: {
        type: 'image',
        src: '/images/hurricane_michael.jpg'
      },
      details: ['Category 5', '160 mph', '919 mbar'],
      link: '#'
    }
  ];

  const renderMedia = (media) => {
    if (media.type === 'video') {
      return (
        <video autoPlay loop muted playsInline>
          <source src={media.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return <img src={media.src} alt="Hurricane event" />;
    }
  };

  return (
    <section id="experience">
      <h2 className="numbered-heading">Experience</h2>
      <div className="work-experience">
        <h3>{workExperience.position} @ {workExperience.company}</h3>
        <p className="duration">{workExperience.duration}</p>
        <ul>
          {workExperience.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>

      <h2 className="numbered-heading notable-events">Notable Hurricane Events</h2>
      {hurricaneEvents.map((event, index) => (
        <div key={index} className="project hurricane-event">
          <div className="project-image">
            {renderMedia(event.media)}
          </div>
          <div className="project-content">
            <div className="project-header">
              <p className="project-overline">{event.year}</p>
              <h3 className="project-title">
                <span className="project-number">{`0${index + 1}.`}</span> {event.title}
              </h3>
              <div className="project-links">
                <a href={event.link} aria-label="External Link" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <div className="project-description">
              <p>{event.description}</p>
            </div>
            <ul className="project-tech-list">
              {event.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;