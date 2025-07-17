import React from 'react';
import './AdminLayout.css';
import UserNavbar from '../../Navbar/UserNavbar';
function AdminLayout() {
  return (
    <>
      <UserNavbar/>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-img">
          <img src="C:\Users\Admin\Desktop\Braches\Manipal-Project\app\public\img.png" alt="Doctor" />
        </div>
        <div className="hero-text">
          <h1>Compassionate <span>Care</span> for a Healthier Tomorrow</h1>
          <p>Your health is our top priority. GreenCare offers professional, reliable, and personalized medical services to suit your family's needs.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Our Services</button>
          </div>
        </div>
      </div>

      {/* Info Boxes */}
      <div className="info-boxes">
        <div className="info-box">
          <h3>Urgent Care</h3>
          <p>Available 24/7 for medical emergencies. Quick, professional help when you need it most.</p>
          <a href="#">Read More →</a>
        </div>
        <div className="info-box">
          <h3>Weekly Schedule</h3>
          <p>Check our specialists' availability and plan your visit conveniently.</p>
          <a href="#">View Timetable →</a>
        </div>
        <div className="info-box">
          <h3>Visit Hours</h3>
          <p>Mon–Fri: 8 AM – 8 PM<br />Sat: 9 AM – 6 PM<br />Sun: Closed</p>
          <a href="#">More Info →</a>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 GreenCare Medical Center. All rights reserved. | <a href="#">Privacy Policy</a></p>
      </footer>
    </>
  );
}

export default AdminLayout;

