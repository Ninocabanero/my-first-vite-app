import React from 'react';
import Navbar from '../components/Navbar';
import './Deals.css';

const Deals = () => {
  return (
    <div className="deals-container">
      <Navbar />
      <div className="deals-content">
        <h1>Special Deals</h1>
        <div className="deals-grid">
          <div className="deal-card">
            <div className="deal-badge">Save 20%</div>
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Luxury Resort Deal" />
            <div className="deal-info">
              <h2>Luxury Resort & Spa</h2>
              <p className="location">Maldives</p>
              <div className="price-info">
                <span className="original-price">$299</span>
                <span className="discounted-price">$239</span>
                <span className="per-night">/night</span>
              </div>
              <p className="deal-description">Book now and save 20% on your stay at our luxury resort. Valid for stays until December 31, 2024.</p>
              <div className="deal-features">
                <span><i className="fas fa-calendar"></i> Valid until Dec 31, 2024</span>
                <span><i className="fas fa-user"></i> 2 Adults</span>
                <span><i className="fas fa-clock"></i> 3 Nights Min</span>
              </div>
              <button className="book-button">Book Now</button>
            </div>
          </div>

          <div className="deal-card">
            <div className="deal-badge">Save 15%</div>
            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Beach Villa Deal" />
            <div className="deal-info">
              <h2>Beachfront Villa</h2>
              <p className="location">Bali, Indonesia</p>
              <div className="price-info">
                <span className="original-price">$199</span>
                <span className="discounted-price">$169</span>
                <span className="per-night">/night</span>
              </div>
              <p className="deal-description">Special offer for beach lovers! Get 15% off on our beachfront villas. Limited time offer.</p>
              <div className="deal-features">
                <span><i className="fas fa-calendar"></i> Valid until Oct 31, 2024</span>
                <span><i className="fas fa-user"></i> 2 Adults</span>
                <span><i className="fas fa-clock"></i> 2 Nights Min</span>
              </div>
              <button className="book-button">Book Now</button>
            </div>
          </div>

          <div className="deal-card">
            <div className="deal-badge">Save 25%</div>
            <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="City Hotel Deal" />
            <div className="deal-info">
              <h2>City Center Hotel</h2>
              <p className="location">New York, USA</p>
              <div className="price-info">
                <span className="original-price">$249</span>
                <span className="discounted-price">$187</span>
                <span className="per-night">/night</span>
              </div>
              <p className="deal-description">Weekend special! Get 25% off on city center stays. Perfect for weekend getaways.</p>
              <div className="deal-features">
                <span><i className="fas fa-calendar"></i> Valid until Dec 31, 2024</span>
                <span><i className="fas fa-user"></i> 2 Adults</span>
                <span><i className="fas fa-clock"></i> 2 Nights Min</span>
              </div>
              <button className="book-button">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals; 