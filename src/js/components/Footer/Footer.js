import React from 'react';
import './Footer.scss';
import hunterLogo from '../../../assets/images/hunter-logo.svg';

const Footer = () => (
  <footer className="Footer--wrapper">
    <div className="col-left">
      <a
        href="https://newsapi.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by News API
      </a>
    </div>
    <div className="footer-logo--container">
      <a
        href="https://hunterjennings.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={hunterLogo}
          alt="designed and developed by Hunter Jennings."
        />
      </a>
    </div>
  </footer>
);


export default Footer;
