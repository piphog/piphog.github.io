import React from 'react';
import { FaGithub, FaLinkedin, FaTiktok, FaTwitter } from 'react-icons/fa';

function Sidebar({ activeSection }) {
  return (
    <div className="sidebar">
      <div>
        <h1>Andrew Hogan</h1>
        <h2 className="job-title">Senior Program Manager</h2>
        <p className="job-description">Seasoned Program Manager / Storm Chaser, Self taught ai developer, and coder.</p>
        <nav>
          <ul>
            <li className={activeSection === 'about' ? 'active' : ''}>
              <a href="#about">About</a>
            </li>
            <li className={activeSection === 'experience' ? 'active' : ''}>
              <a href="#experience">Experience</a>
            </li>
            <li className={activeSection === 'projects' ? 'active' : ''}>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="sidebar-footer">
        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/andrew-hogan-07946a112" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.tiktok.com/@rxpotes" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          <a href="https://x.com/MandruYogan" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
        <p className="credit">Designed & built by Andrew Hogan</p>
      </div>
    </div>
  );
}

export default Sidebar;