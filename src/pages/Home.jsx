import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Home.css';

const Home = () => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  });

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Search params:', searchParams);
  };

  return (
    <div className="home-container">
      <Navbar />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Find Your Perfect Stay</h1>
          <p>Discover luxury hotels and comfortable accommodations worldwide</p>
          
          {/* Search Form */}
          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-inputs">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Where are you going?"
                  value={searchParams.location}
                  onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
                />
              </div>
              <div className="input-group">
                <input
                  type="date"
                  value={searchParams.checkIn}
                  onChange={(e) => setSearchParams({...searchParams, checkIn: e.target.value})}
                />
              </div>
              <div className="input-group">
                <input
                  type="date"
                  value={searchParams.checkOut}
                  onChange={(e) => setSearchParams({...searchParams, checkOut: e.target.value})}
                />
              </div>
              <div className="input-group">
                <input
                  type="number"
                  min="1"
                  value={searchParams.guests}
                  onChange={(e) => setSearchParams({...searchParams, guests: e.target.value})}
                />
              </div>
            </div>
            <button type="submit" className="search-button">Search Hotels</button>
          </form>
        </div>
      </section>

      {/* Featured Hotels Section */}
      <section className="featured-hotels">
        <h2>Featured Hotels</h2>
        <div className="hotel-grid">
          <div className="hotel-card">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Luxury Hotel" />
            <div className="hotel-info">
              <h3>Luxury Resort & Spa</h3>
              <p className="location">Maldives</p>
              <p className="price">From $299/night</p>
              <button className="book-button">Book Now</button>
            </div>
          </div>
          <div className="hotel-card">
            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Beach Hotel" />
            <div className="hotel-info">
              <h3>Beachfront Villa</h3>
              <p className="location">Bali, Indonesia</p>
              <p className="price">From $199/night</p>
              <button className="book-button">Book Now</button>
            </div>
          </div>
          <div className="hotel-card">
            <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="City Hotel" />
            <div className="hotel-info">
              <h3>City Center Hotel</h3>
              <p className="location">New York, USA</p>
              <p className="price">From $249/night</p>
              <button className="book-button">Book Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature">
            <i className="fas fa-hotel"></i>
            <h3>Best Hotels</h3>
            <p>Carefully selected premium accommodations</p>
          </div>
          <div className="feature">
            <i className="fas fa-percent"></i>
            <h3>Best Price</h3>
            <p>Competitive rates and special offers</p>
          </div>
          <div className="feature">
            <i className="fas fa-headset"></i>
            <h3>24/7 Support</h3>
            <p>Round-the-clock customer service</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 