// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="contact-info">
        <p>Contact Information: Phone: +1 (555) 489-7263 | Address: 768 Horizon Way, Nomad's Peak, CA 94105, United States</p>
      </div>
      <nav className="footer-nav">
        <ul>
          <li>Home</li>
          <li>Destinations</li>
          <li>Tours</li>
          <li>Blog</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="social-icons">
        {/* Add your social media icons here */}
        <a href="#facebook">Facebook</a>
        <a href="#twitter">Twitter</a>
        <a href="#instagram">Instagram</a>
      </div>
      <div className="legal-links">
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
