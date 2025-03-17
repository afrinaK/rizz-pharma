import React from "react";
import "../styles/ImageSection.css";
import backgroundImage from "../assets/Add.png"; // Ensure the path is correct

const ImageSection = () => {
  return (
    <div className="image-container">
      <img src={backgroundImage} alt="Displayed Content" />
    </div>
  );
};

export default ImageSection;
