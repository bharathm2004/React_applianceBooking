// Footer.js
import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-i">
        <p>Social media</p>
      </div>
      <div className="footer-icons">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div className="footer-contact">
        <p>Contact us: &nbsp;&nbsp; 9790333705</p>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className="footer-contact">
        <p>Email: &nbsp;&nbsp; info@royalappliances.com</p>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className="footer-links">
        <a href="/">Home</a>
      </div>
    </footer>
  );
};

export default Footer;
