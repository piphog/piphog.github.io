
import { motion } from "framer-motion"; // Importing motion from framer-motion

const About = () => {
  return (
    <motion.div
      id="about"
      className="about-us container"
      initial={{ opacity: 0, x: -50 }} // Start with opacity 0 and shift left
      animate={{ opacity: 1, x: 0 }} // Animate to full opacity and original position
      transition={{ duration: 0.8 }} // Duration of the animation
    >
      <div className="row w-100">
        {/* Left Side - Image */}
        <div className="col-lg-4">
          <img
            src="https://img.freepik.com/free-vector/video-game-developer-concept-illustration_114360-5976.jpg?t=st=1727519070~exp=1727522670~hmac=7633f8d75eff8402473aab6839bcce5b9685a1c5986e126a2e49a9944775b27b&w=740"
            alt="About Me"
            className="img-fluid rounded about-img"
          />
        </div>

        {/* Right Side - Heading and Content */}
        <div className="col-lg-8 col-md-12 d-flex justify-content-end">
          <div className="content">
            <h2 className="about-heading display-5 fw-bold mb-4 text-grn">
              About Me
            </h2>
            <p className="about-content lead txt-white">
              Back in 2012, I tried my hand with a relatively new company in the
              disaster recovery sector. Since Hurricane Sandy in 2012, I have
              tumbled head first into the rabbit hole of disaster recovery
              project management. Fast forward to today, {`I've`} had the
              privilege of working on some of the most rewarding projects, with
              some of the best people, and innovating operational procedures for
              such an interesting and great company.
            </p>
            <div className="bottom mt-4">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <h5 className="txt-white mb-0">Name:</h5>
                    <p className="ps-3 txt-white d-block mb-0">Andrew Hogan</p>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <h5 className="txt-white mb-0">From:</h5>
                    <p className="ps-3 txt-white d-block mb-0">
                      Raleigh NC
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <h5 className="txt-white mb-0">Age:</h5>
                    <p className="ps-3 txt-white d-block mb-0">40</p>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <h5 className="txt-white mb-0">Email:</h5>
                    <p className="ps-3 txt-white d-block mb-0">
                      hogan@protonmail.ch
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
