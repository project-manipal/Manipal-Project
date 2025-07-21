import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';
import hospitalBuilding from '../../assets/images/about/manipal-hospital.jpg';
import heroBg from '../../assets/images/about/hero-bg.jpg';
import expertDoctorsIcon from '../../assets/images/icons/expert-doctors.png';
import patientCareIcon from '../../assets/images/icons/patient-care.png';
import comprehensiveServicesIcon from '../../assets/images/icons/bed.png';
import advancedTechIcon from '../../assets/images/icons/advanced-tech.png';
import healthCamp from '../../assets/images/community/health-camp.jpg';
import awarenessProgram from '../../assets/images/community/awareness-program.jpg';
import csrActivity from '../../assets/images/community/csr-activity.jpg';
import CountUp from './CountUp';

const Aboutus = () => {
  return (
    <div className="about-container">
      <p></p>
      <section className="hero-section" style={{ backgroundImage: `linear-gradient(135deg, #0073aa, #004e74), url()` }}>
        <div className="hero-content">
          <h1>About Manipal Hospitals</h1>
          <p>Delivering excellence in healthcare for over <CountUp from={0} to={50} duration={1} suffix=" years+" /></p>
        </div>
      </section>

      {/* Achievements Section */}
      <motion.section 
        className="achievements-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2 className="section-title">Our Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <h3><CountUp from={0} to={50} duration={1} suffix="+" /></h3>
              <p>Years of Service</p>
            </div>
            <div className="achievement-card">
              <h3><CountUp from={0} to={7000} duration={1} separator="," suffix="+" /></h3>
              <p>Beds Across Network</p>
            </div>
            <div className="achievement-card">
              <h3><CountUp from={0} to={4} duration={1} suffix="M+" /></h3>
              <p>Patients Treated Annually</p>
            </div>
            <div className="achievement-card">
              <h3><CountUp from={0} to={30} duration={1} suffix="+" /></h3>
              <p>Hospitals in India</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <section className="why-us-section">
        <div className="container">
          <h2 className="section-title">Why Choose Manipal Hospitals</h2>
          <div className="why-us-grid">
            <div className="why-us-card">
              <div className="icon-box">
                <img src={expertDoctorsIcon} alt="Expert Doctors" />
              </div>
              <h3>Expert Doctors</h3>
              <p>Our team comprises some of the most experienced and skilled medical professionals in the country.</p>
            </div>
            <div className="why-us-card">
              <div className="icon-box">
                <img src={advancedTechIcon} alt="Advanced Technology" />
              </div>
              <h3>Advanced Technology</h3>
              <p>We invest in cutting-edge medical technology to ensure accurate diagnoses and effective treatments.</p>
            </div>
            <div className="why-us-card">
              <div className="icon-box">
                <img src={patientCareIcon} alt="Patient-Centric Care" />
              </div>
              <h3>Patient-Centric Care</h3>
              <p>Your health and comfort are our top priorities at every step of your healthcare journey.</p>
            </div>
            <div className="why-us-card">
              <div className="icon-box">
                <img src={comprehensiveServicesIcon} alt="Comprehensive Services" />
              </div>
              <h3>Comprehensive Services</h3>
              <p>From primary care to complex surgeries, we offer a full spectrum of medical services under one roof.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story-section">
        <div className="container">
          <div className="story-content">
            <h2 className="section-title">Our Story</h2>
            <p>
              Founded in 1953, Manipal Hospitals has grown to become one of India's leading healthcare providers. 
              What began as a single hospital in Manipal is now a network of healthcare institutions across the country, 
              known for clinical excellence and patient care.
            </p>
            <p>
              Our journey has been marked by numerous milestones - from pioneering medical procedures to expanding 
              our reach to serve communities across India. Today, we continue to build on this legacy, embracing 
              innovation while staying true to our founding principles of putting patients first.
            </p>
          </div>
          <div className="story-image">
            <img src={hospitalBuilding} alt="Manipal Hospital Building" />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <div className="container">
          <h2 className="section-title">Our Community Initiatives</h2>
          <div className="community-grid">
            <div className="community-card">
              <img src={healthCamp} alt="Health Camps" />
              <h3>Health Camps</h3>
              <p>Regular free health check-up camps in underserved communities</p>
            </div>
            <div className="community-card">
              <img src={awarenessProgram} alt="Awareness Programs" />
              <h3>Awareness Programs</h3>
              <p>Educational initiatives on preventive healthcare and disease management</p>
            </div>
            <div className="community-card">
              <img src={csrActivity} alt="CSR Activities" />
              <h3>CSR Activities</h3>
              <p>Various corporate social responsibility programs for community welfare</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Experience the Manipal Difference</h2>
          <p>Join 4 million+ who have trusted us with their healthcare needs</p>
          <button className="cta-button">Book an Appointment</button>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;