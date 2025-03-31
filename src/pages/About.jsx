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

        <section className="about-story">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>Founded in 2024, HotelBooking has been at the forefront of the travel industry, connecting travelers with their ideal accommodations worldwide. We believe that every journey deserves the perfect stay, and we're here to make that happen.</p>
          </div>
          <div className="story-image">
            <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Our Story" />
          </div>
        </section>

        <section className="about-mission">
          <h2>Our Mission</h2>
          <p>To provide travelers with a seamless booking experience and access to the world's best accommodations at competitive prices.</p>
        </section>

        <section className="about-values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <i className="fas fa-heart"></i>
              <h3>Customer First</h3>
              <p>We prioritize our customers' needs and satisfaction above everything else.</p>
            </div>
            <div className="value-card">
              <i className="fas fa-shield-alt"></i>
              <h3>Trust & Reliability</h3>
              <p>We maintain the highest standards of trust and reliability in all our operations.</p>
            </div>
            <div className="value-card">
              <i className="fas fa-globe"></i>
              <h3>Global Reach</h3>
              <p>We connect travelers with accommodations worldwide, making travel accessible to all.</p>
            </div>
          </div>
        </section>

        <section className="about-team">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Team Member 1" />
              <h3>John Doe</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Team Member 2" />
              <h3>Jane Smith</h3>
              <p>Head of Operations</p>
            </div>
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Team Member 3" />
              <h3>Mike Johnson</h3>
              <p>Customer Relations</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 