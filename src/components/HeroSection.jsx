import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaDownload } from 'react-icons/fa'; // Import the download icon

const HeroSection = () => {
  return (
    <div className="hero-section" id="home">
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row w-100">
          {/* Left Side - Text & Buttons */}
          <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-start">
            <motion.h4
              className="mb-3 txt-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hi There!
            </motion.h4>
            <motion.h1
              className="txt-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I am a{" "}
              <span className="text-grn">
                <Typewriter
                  words={[
                    "Seasoned Program Manager",
                    "Disaster Logistics Expert",
                    "AI Developer",
                    "Coder",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </motion.h1>
            <motion.div
              className="buttons mt-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="#contact" className="btn btn-lg primary-btn me-3 mb-2">
                Contact
              </a>
              <a 
                href="/assets/hogancv.pdf" 
                download 
                className="btn btn-lg primary-btn-outline mb-2"
              >
                <FaDownload className="me-2" /> Download CV
              </a>
            </motion.div>
          </div>

          {/* Right Side - Developer Image */}
          <div className="col-lg-6 col-md-12 d-flex justify-content-center">
            <motion.img
              src="https://img.freepik.com/free-photo/handsome-man-posing_144627-44881.jpg?t=st=1727508511~exp=1727512111~hmac=c38b3f9108dd501818933248950778fa9b0ea8eb5706094b9cb796b8b7338398&w=360"
              alt="Developer"
              className="img-fluid developer-img"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;