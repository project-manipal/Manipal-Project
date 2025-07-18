import React, { useRef } from 'react';
import { useInView , motion }  from 'framer-motion';
import './Aboutus.css';

import hospitalBuilding from '../../assets/hospital-building.jpg';
import medicalTeam from '../../assets/medical-team.jpg';
import technology from '../../assets/medical-technology.jpg';

export const Facility = ()=>{
    return(
      <motion.div className='facility'
        initial={{ opacity: 0, x: 800 }}     
        whileInView={{ opacity: 1, x: 0 }}   
        transition={{ duration: 0.5 }}
      >
        <FeatureCard
          image={medicalTeam}
          alt="Medical Team"
          heading="Our Expert Medical Team"
          points={[
            "👨‍⚕️ 4000+ experienced doctors",
            "👩‍⚕️ 10000+ healthcare professionals",
            "🏆 Internationally trained specialists",
            "💡 Leaders in medical research"
          ]}
          reverseOnScroll={true}
        />
      </motion.div>
    )
}

export const Hospital=()=>{
  return(
    <motion.div
     initial={{ opacity: 0, x: -800 }}
     whileInView={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.5 }}
    >
      <FeatureCard
        image={hospitalBuilding}
        alt="Manipal Hospital Facility"
        heading="Our World-Class Facilities"
        points={[
          "🏥 1500+ bed capacity across India",
          "🏥 Advanced ICUs and operation theaters",
          "🏥 Cutting-edge diagnostic centers",
          "🏥 Specialized treatment centers"
        ]}
        reverseOnScroll={false}
      />
    </motion.div>
  )
}

export const Technology=()=>{
  return(
    <motion.div
     initial={{ opacity: 0, x: -800 }}
     whileInView={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.5 }}
    >
      <FeatureCard
        image={technology}
        alt="Medical Technology"
        heading="Our Advanced Technology"
        points={[
          "⚕️ Robotic surgery systems",
          "🖥️ AI-assisted diagnostics",
          "📱 Digital patient records",
          "📊 Telemedicine services"
        ]}
      />
    </motion.div>
  )
}

const FeatureCard = ({ image, alt, heading, points, reverseOnScroll }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={`feature-card ${isInView && reverseOnScroll ? 'reverse' : ''} ${isInView ? 'in-view' : ''}`}
    >
      <img src={image} alt={alt} className="feature-image" />
      <div className="feature-content">
        <h3 className="animated-heading">{heading}</h3>
        <ul>
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Aboutus = () => {
  return (
    <div className="about-us-container">
      <div className="about-header fade-in-up delay-1">
        <h1 className="animated-header">MORE ABOUT MANIPAL HOSPITAL</h1>
        <h2 className="animated-subheader">Delivering Healthcare Excellence for Decades</h2>
      </div>

      <div className="about-hero fade-in-up delay-2">
        <div className="hero-content">
          <p>
            Manipal Hospitals is your trusted healthcare partner with advanced medical facilities, 
            cutting-edge technology, and a team of renowned specialists. We redefine healthcare 
            delivery through clinical excellence, patient-centric care, and innovative treatments.
          </p>
        </div>
      </div>

      <div className="features-section">
        <Hospital/>
        <Facility/>
        <Technology/>
      </div>
    </div>
  );
};

export default Aboutus;
