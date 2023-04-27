import React from "react";
import "./styles.css";
const Hero = ({ title, subtitle }) => {
  return (
    <div className="hero" id="hero">
      <div className="hero_content">
        <h1 className="hero_title">{title}</h1>
        <h3 className="hero_subtitle">
          <em>{subtitle}</em>
        </h3>
        <a href="#cardContainer" className="hero_button">
          View More ↓
        </a>
      </div>
    </div>
  );
};

export default Hero;
