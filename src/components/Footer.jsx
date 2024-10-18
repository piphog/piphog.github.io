
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-section text-light py-4">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Left Side: Social Links */}
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>

        {/* Right Side: Designer Info */}
        <div className="designer-info">
          <p className="mb-0">Designed & Built by Andrew Hogan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
