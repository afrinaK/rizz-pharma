import React from "react";
import "../styles/Hero.css"; // Ensure this file exists
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                <h1 className="hero-title">
                    Prescription Treatments For <br />Your <br /> <span className="highlight">Health Goals</span>
                </h1>
                <button className="hero-button">Find My Treatment</button>

            </div>
            <div className="search-container">
                <div className="search-box-wrapper">
                <button className="search-btn">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <input type="text" className="search-box" placeholder="Search by product/treatment" />

                </div>
            </div>
        </section>
        
    );
};

export default Hero;
