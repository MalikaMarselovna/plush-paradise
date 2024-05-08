import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3 className="footer__section-title">Customer Service</h3>
          <ul className="footer__section-list">
            <li className="footer__section-item"><a href="#">Contact Us</a></li>
            <li className="footer__section-item"><a href="#">FAQ</a></li>
            <li className="footer__section-item"><a href="#">Shipping</a></li>
            <li className="footer__section-item"><a href="#">Returns</a></li>
            
          </ul>
        </div>
        <div className="footer__section">
          <h3 className="footer__section-title">Information</h3>
          <ul className="footer__section-list">
            <li className="footer__section-item"><a href="#">About Us</a></li>
            <li className="footer__section-item"><a href="#">Privacy Policy</a></li>
            <li className="footer__section-item"><a href="#">Terms & Conditions</a></li>
            <li className="footer__section-item"><a href="#">Accessibility</a></li>
           
          </ul>
        </div>
        <div className="footer__section">
          <h3 className="footer__section-title">Connect With Us</h3>
          <ul className="footer__section-list">
            <li className="footer__section-item"><a href="mailto:mmukashova1gmail.com">Sign up for Email</a></li>
            <li className="footer__section-item"><a href="#">Gift Cards</a></li>
            <li className="footer__section-item"><a href="#">Find a Store</a></li>
           
          </ul>
        </div>
      </div>
      <div className="footer__legal">
        <p>© 2024 Plush Paradise. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

