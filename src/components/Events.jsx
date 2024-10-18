import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaExternalLinkAlt } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation styles
import "swiper/css/autoplay"; // Import autoplay styles

const Events = () => {
  const hurricaneEvents = [
    {
      year: "2012",
      title: "Hurricane Sandy",
      description:
        "Hurricane Sandy, also known as Superstorm Sandy, was one of the most destructive hurricanes in U.S. history. It caused widespread damage across the northeastern United States, particularly in New Jersey and New York. Our team was heavily involved in the recovery efforts, managing multiple staging sites and coordinating with local authorities to provide essential services and support to affected communities.",
      media: {
        type: "video",
        src: "/videos/hurricane_sandy_loop.mp4",
      },
      details: ["Category 3", "115 mph", "940 mbar"],
      link: "#",
    },
    {
      year: "2016",
      title: "Hurricane Mathew",
      description:
        "Hurricane Matthew was a devastating Category 5 hurricane that caused extensive damage in Haiti, Cuba, and the southeastern United States. Our disaster response team was deployed to multiple affected areas, setting up relief camps and coordinating supply distribution. We faced significant challenges due to widespread power outages and flooding, but our team's experience and dedication allowed us to provide crucial support to impacted communities.",
      media: {
        type: "image",
        src: "/images/matthew.jpg",
      },
      details: ["Category 5", "165 mph", "934 mbar"],
      link: "#",
    },
    {
      year: "2017",
      title: "Hurricane Irma",
      description:
        "Hurricane Irma was one of the strongest hurricanes ever recorded in the Atlantic basin. It caused catastrophic damage in Barbuda, Saint Barthélemy, Saint Martin, Anguilla, and the Virgin Islands before making landfall in Florida. Our team was involved in extensive preparatory measures and post-storm recovery efforts. We managed multiple relief camps, coordinated evacuations, and worked closely with local and federal agencies to provide immediate assistance to affected areas.",
      media: {
        type: "image",
        src: "/images/irma.jpg",
      },
      details: ["Category 5", "175 mph", "908 mbar"],
      link: "#",
    },
    {
      year: "2017",
      title: "Hurricane Maria",
      description:
        "Hurricane Maria was a catastrophic Category 5 hurricane that devastated Dominica, the U.S. Virgin Islands, and Puerto Rico. It caused widespread destruction in Puerto Rico, leading to a humanitarian crisis. Our team was heavily involved in long-term recovery efforts, managing relief camps, coordinating supply chains for food and water distribution, and assisting in the restoration of critical infrastructure. This event highlighted the importance of sustainable, long-term disaster recovery strategies.",
      media: {
        type: "image",
        src: "/images/maria.jpg",
      },
      details: ["Category 5", "175 mph", "908 mbar"],
      link: "#",
    },
    {
      year: "September 2018",
      title: "Hurricane Florence",
      description:
        "Hurricane Florence was a powerful and long-lived Cape Verde hurricane that caused catastrophic damage in the Carolinas, primarily as a result of freshwater flooding. Our team was deployed before the hurricane made landfall, preparing emergency shelters and coordinating with local authorities. Post-landfall, we managed multiple relief camps, assisted in rescue operations, and provided logistical support for the distribution of essential supplies. The extensive flooding posed unique challenges, requiring innovative solutions for relief efforts.",
      media: {
        type: "image",
        src: "/images/florence.jpg",
      },
      details: ["Category 4", "150 mph", "937 mbar"],
      link: "#",
    },
    {
      year: "2018",
      title: "Hurricane Michael",
      description:
        "Hurricane Michael rapidly intensified to a category 5 hurricane and struck the FL panhandle while we were still in the process of completing Florence recovery operations. Transitioning the company to a webapp during this season added a layer of difficulty. Admin teams supplemented the transition filling webapp capability gaps. Despite the web app limitations, we successfully improved expense tracking, audit, and billing procedures with the help of a skilled administrative team. These efforts included the help of on-site admin across 24 different staging sites and basecamps.",
      media: {
        type: "image",
        src: "/images/michael.jpg",
      },
      details: ["Category 5", "160 mph", "919 mbar"],
      link: "#",
    },
    {
      year: "November 2018",
      title: "California Camp Fire",
      description:
        "The Camp Fire was the deadliest and most destructive wildfire in California's history, particularly devastating the town of Paradise. Our team established a long-term basecamp to provide crucial telecom support for recovery efforts. We coordinated with local authorities and telecom companies to restore communication infrastructure, which was vital for ongoing rescue and rebuilding operations. This event demonstrated our ability to adapt our disaster response expertise to different types of natural disasters, including wildfires.",
      media: {
        type: "image",
        src: "/images/camp_fire.jpg",
      },
      details: ["153,336 acres", "18,000 structures", "$16.5 B"],
      link: "#",
    },
    {
      year: "2024",
      title: "Hurricane Helene",
      description:
        "Helene was very reminiscent of Michael in both strength and path of the storm. However, no one could anticipate the level of damaged experienced by western North Carolina. The severity of the damage made recovery efforts more challenging with a total of 35 sites and basecamps spanning from NC to FL. This included two large housing sites in Asheville, NC. Cross-functional admin teams worked around the clock on data entry, app support, expense reimbursements, on-site operations, etc.",
      media: {
        type: "image",
        src: "/images/helene.jpg",
      },
      details: ["Category 4", "130 mph", "919 mbar"],
      link: "#",
    },
    {
      year: "2024",
      title: "Hurricane Milton",
      description:
        "Hurricane Milton was an intense storm that caused significant damage along the Gulf Coast. Our team was mobilized quickly, leveraging our experience from previous disasters to set up efficient relief operations. We managed multiple staging areas and coordinated closely with local emergency services. The storm's rapid intensification posed challenges, but our adaptive strategies allowed us to provide timely and effective support to affected communities.",
      media: {
        type: "image",
        src: "/images/milton.jpg",
      },
      details: ["Category 4", "130 mph", "897 mbar"],
      link: "#",
    },
  ];
  // Define an array of badge classes
  const badgeClasses = [
    "bg-primary",  // First detail
    "bg-secondary", // Second detail
    "bg-success",   // Third detail
    "bg-danger",    // Fourth detail
    "bg-warning",   // Fifth detail
    "bg-info",      // Sixth detail
    "bg-light",     // Seventh detail
    "bg-dark"       // Eighth detail
  ];
  const renderMedia = (media) => {
    if (media.type === "video") {
      return (
        <video autoPlay loop playsInline className="event-image">
          <source src={media.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return (
        <img
          src={media.src}
          alt="Hurricane event"
          className="card-img-top event-image"
        />
      );
    }
  };

  return (
    <div className="events-section container mt-5 pt-5">
      {/* Main Heading */}
      <h2 className="section-title display-5 fw-bold text-center txt-white mb-5">
        Notable Hurricane Events
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }} // Add pagination bullets
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Enable autoplay
        breakpoints={{
          // when window width is <= 640px
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Autoplay]} // Include pagination and autoplay modules
        className="mySwiper"
      >
        {/* Events Card 1 */}
        {hurricaneEvents.map((event, index) => (
          <SwiperSlide className="fade-out" key={index}>
            <div className="event-card card shadow-sm mt-3">
              {renderMedia(event.media)}
              <div className="card-body">
                <h3 className="event-title card-title txt-white mb-0">
                  {event.title}
                </h3>
                <div className="after-title d-flex align-items-center mt-3">
                  <span className="event-date txt-white d-block">
                    {event.year}
                  </span>
                  <div className="p-links ms-2">
                  {event.details.map((detail, detailIndex) => (
                    <span
                      key={detailIndex}
                      className={`badge ${badgeClasses[detailIndex % badgeClasses.length]} text-light me-2`}
                    >
                      {detail}
                    </span>
                  ))}
                </div>
                </div>
                <p className="event-description card-text txt-white">
                  {event.description}
                </p>

                <div className="project-links">
                  <a
                    href={event.link}
                    aria-label="External Link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Events;
