import React from "react";
import "./style.css";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-inner">
          <h1>Find Your Brew</h1>
          <h2>Your guide to finding breweries all across America</h2>
          <a href="https://example.com/" className="btn">
            Go ahead...
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
