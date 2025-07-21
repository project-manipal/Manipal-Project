import React, { useState } from 'react';
import './GuestDashboard.css';
const GuestDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="guest-dashboard">
      {!isSidebarOpen && (
        <button className="toggle-button" onClick={handleToggle}>
          {'☰'}
        </button>
      )}
      <aside className={isSidebarOpen ? 'sidebar open' : 'sidebar'}>
        {isSidebarOpen && (
          <button className="sidebar-close-button" onClick={handleToggle}>
            ✖
          </button>
        )}
        <div className="whole-container">
          <div className="sidebar-profile">
            <img src="img-1.png" alt="Guest Profile" />
            <h3>Hello, Guest</h3>
          </div>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Departments</li>
            <li>Our Doctors</li>
            <li>Timings</li>
            <li>Request Appointment</li>
          </ul>
        </nav>
      </aside>
      <main className={isSidebarOpen ? 'main shift' : 'main'}>
        <header>
          <h1 id="header-h1">Welcome to Our Hospital</h1>
        </header>
        <section className="info-cards">
          <div><h3>Open Hours</h3><p>Mon - Sat: 9 AM - 6 PM</p></div>
          <div><h3>Emergency</h3><p>24/7 Available</p></div>
          <div><h3>Departments</h3><p>Cardiology, Neurology, Pediatrics...</p></div>
          <div><h3>Total Doctors</h3><p>60+</p></div>
        </section>
        <section className="features">
          <div><h4>Why Choose Us?</h4><p>Top-rated healthcare and patient safety.</p></div>
          <div><h4>Available Services</h4><p>Outpatient, Inpatient, Surgery, Labs</p></div>
          <div><h4>Quick Help</h4><p>Contact helpdesk: 1800-123-456</p></div>
          <div><h4>Book a Visit</h4><p>No login needed. Just request.</p></div>
        </section>
        <section className="contact-section">
          <h2>Have Questions?</h2>
          <p>Reach us via contact form or call us anytime.</p>
        </section>
      </main>
    </div>
  );
};
export default GuestDashboard;
