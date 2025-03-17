import React from "react";
import "../styles/FeaturesSection.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faHeadset,
  faTruck,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

const FeaturesSection = () => {
  const features = [
    { icon: faShieldAlt, title: "Secure Payment" },
    { icon: faHeadset, title: "Online Support" },
    { icon: faTruck, title: "Free Shipping" },
    { icon: faTag, title: "Best Value" },
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6 text-center">
              <div className="feature-item">
                <FontAwesomeIcon icon={feature.icon} className="feature-icon" />
                <h5>{feature.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
