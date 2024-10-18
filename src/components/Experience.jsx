import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome component
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"; // Import specific icon
import { motion } from "framer-motion"; // Importing motion from framer-motion

const Experience = () => {

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

  let details = ["Cross-functional team development & leadership", "Strategic planning and execution", "Program management methodologies (Agile, Waterfall, etc.)", "Process improvement methodologies", "Vendor and client relationship management","PMP, CBCP, Lean, etc.", "Microsoft Project, Asana, Jira, Excel, Tableau, Python, Node.js, React", "Artificial Intelligence and Machine Learning basics"];

  // Define an array of badge classes
  const badgeClasses = [
    "bg-primary",  // First detail
    "bg-secondary", // Second detail
    "bg-success",   // Third detail
    "bg-danger",    // Fourth detail
    "bg-warning",   // Fifth detail
    "bg-info",      // Sixth detail
    "bg-light text-dark",     // Seventh detail
    "bg-dark"       // Eighth detail
  ];

  return (
    <motion.div
      id="experience"
      className="experience-section container mt-5 pt-5"
      initial={{ opacity: 0 }} // Start with opacity 0 (invisible)
      animate={{ opacity: 1 }} // Animate to opacity 1 (visible)
      transition={{ duration: 0.8 }} // Duration of the animation
    >
      <h2 className="section-title display-5 fw-bold text-center mb-5 txt-white">
        Experience
      </h2>

      <div className="row justify-content-center">
        {/* Experience Item */}
        <div className="col-lg-8 col-md-10 col-sm-12 mb-4">
          <div className="experience-item p-4 rounded shadow-sm">
            {/* Job Title and Company */}
            <h3 className="job-title mb-1 txt-white mb-3">
              {workExperience.position}
            </h3>
            <h4 className="company-name txt-white">{workExperience.company}</h4>
            {/* Job Duration */}
            <span className="job-duration text-grn mb-3 d-block">
              2012 - Present
            </span>

            {/* Job Responsibilities with FontAwesome Icons */}
            <ul className="job-responsibilities list-unstyled ps-0">

              {workExperience.responsibilities.map((responsibility, index) => (
                <li key={index}>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="responsibility-icon me-2 text-grn"
                  />
                  <span className="txt-white">
                    {responsibility}
                  </span>
                </li>
              ))}

            </ul>
            <div className="p-links my-3">
              {details.map((detail, detailIndex) => (
                <span
                  key={detailIndex}
                  className={`badge ${badgeClasses[detailIndex % badgeClasses.length]} text-light me-2`}
                >
                  {detail}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
