import React from 'react';
import Navbar from '../components/Navbar';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <Navbar />
      <div className="about-content">
        <section className="about-hero">
          <h1>About Us</h1>
          <p>Your trusted partner in finding the perfect accommodation</p>
        </section>
      </div>
    </div>
  );
};

export default About; 