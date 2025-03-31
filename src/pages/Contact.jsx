import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-container">
      <Navbar />
      <div className="contact-content">
        <section className="contact-hero">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for any questions or assistance</p>
        </section>

        <section className="contact-info">
          <div className="info-grid">
            <div className="info-card">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Address</h3>
              <p>123 Hotel Street</p>
              <p>New York, NY 10001</p>
            </div>
            <div className="info-card">
              <i className="fas fa-phone"></i>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
              <p>+1 (555) 987-6543</p>
            </div>
            <div className="info-card">
              <i className="fas fa-envelope"></i>
              <h3>Email</h3>
              <p>info@hotelbooking.com</p>
              <p>support@hotelbooking.com</p>
            </div>
          </div>
        </section>

        <section className="contact-form-section">
          <div className="form-container">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact; 