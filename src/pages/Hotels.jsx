import React from 'react';
import Navbar from '../components/Navbar';
import './Hotels.css';

const Hotels = () => {
  return (
    <div className="hotels-container">
      <Navbar />
      <div className="hotels-content">
        <h1>Our Hotels</h1>
        <div className="hotels-grid">
          <div className="hotel-item">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Luxury Resort" />
            <div className="hotel-details">
              <h2>Luxury Resort & Spa</h2>
              <p className="location">Maldives</p>
              <p className="description">Experience ultimate luxury with our premium resort featuring private pools and ocean views.</p>
              <div className="hotel-features">
                <span><i className="fas fa-wifi"></i> Free WiFi</span>
                <span><i className="fas fa-swimming-pool"></i> Pool</span>
                <span><i className="fas fa-utensils"></i> Restaurant</span>
              </div>
              <p className="price">From $299/night</p>
              <button className="book-button">Book Now</button>
            </div>
          </div>

          <div className="hotel-item">
            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Beach Villa" />
            <div className="hotel-details">
              <h2>Beachfront Villa</h2>
              <p className="location">Bali, Indonesia</p>
              <p className="description">Enjoy the perfect beach getaway with our exclusive beachfront villas.</p>
              <div className="hotel-features">
                <span><i className="fas fa-wifi"></i> Free WiFi</span>
                <span><i className="fas fa-umbrella-beach"></i> Beach Access</span>
                <span><i className="fas fa-spa"></i> Spa</span>
              </div>
              <p className="price">From $199/night</p>
              <button className="book-button">Book Now</button>
            </div>
          </div>

          <div className="hotel-item">
            <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="City Hotel" />
            <div className="hotel-details">
              <h2>City Center Hotel</h2>
              <p className="location">New York, USA</p>
              <p className="description">Modern comfort in the heart of the city with stunning skyline views.</p>
              <div className="hotel-features">
                <span><i className="fas fa-wifi"></i> Free WiFi</span>
                <span><i className="fas fa-dumbbell"></i> Gym</span>
                <span><i className="fas fa-parking"></i> Parking</span>
              </div>
              <p className="price">From $249/night</p>
              <button className="book-button">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels; 