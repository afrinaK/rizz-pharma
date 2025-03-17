import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/UFC_RIZZ Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                
                <div className="logo">
                <img src={logo} alt="UFC RIZZ PHARMA Logo" />
                </div>

                <div className="na">
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Category</a></li>
                    <li><a href="#">Top Products</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">FAQs</a></li>
                    <div className="social-icons">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="1x" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="1x" />
                    </a>
                    </div>
                </ul>

                {/* Right - Buttons and Cart */}
                <div className="nav-buttons">
                    <button className="signup-btn">Sign Up</button>
                    <button className="login-btn">Log In</button>
                    <span className="cart-icon">🛒</span>
                </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
