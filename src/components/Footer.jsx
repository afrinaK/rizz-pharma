import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-subscribe">
          <h3>Let's Stay In Touch</h3>
          <p>Keep up to date with our latest news & special offers.</p>
          <div className="email-input">
            <input type="email" placeholder="Enter your email" />
            <button>&#10148;</button> {/* Right arrow icon */}
          </div>
          
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Erectile Dysfunction</a></li>
              <li><a href="#">Weight Loss</a></li>
              <li><a href="#">Men’s Hair Loss</a></li>
            </ul>
          </div>
          <div>
            <h4>Our Company</h4>
            <ul>
              <li><a href="#">HIPAA Notice</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Return & Refund Policy</a></li>
              <li><a href="#">Terms Of Use</a></li>
              <li><a href="#">CCPA Opt-Out</a></li>
              <li><a href="#">Opt-Out Preferences</a></li>
            </ul>
          </div>
        </div>

        {/* Contact & Socials */}
        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p>hello@rizzpharma.com</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
          <p>Copyright &copy; 2024 Rizz Pharma. All Rights Reserved.</p>
          <p>Built by Business Web Social</p>
        </div>
      </div>

      {/* Background Logo */}
      <div className="footer-logo">RIZZ PHARMA</div>
    </footer>
  );
};

export default Footer;
