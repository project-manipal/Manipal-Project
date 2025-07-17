import React from 'react';
import './DoctorLayout.css';


const doctors = [
  {
    name: 'Dr. Alexander',
    specialization: 'Cardiologist',
    patients: 606,
    age: 45,
    points: 654,
  },
  {
    name: 'Dr. Charlotte',
    specialization: 'Psychiatrist',
    patients: 567,
    age: 48,
    points: 324,
  },
  {
    name: 'Dr. Jackson',
    specialization: 'Radiologist',
    patients: 457,
    age: 47,
    points: 697,
  },
  {
    name: 'Dr. Jackson',
    specialization: 'Radiologist',
    patients: 457,
    age: 47,
    points: 697,
  },
  {
    name: 'Dr. Jackson',
    specialization: 'Radiologist',
    patients: 457,
    age: 47,
    points: 697,
  },
  {
    name: 'Dr. Jackson',
    specialization: 'Radiologist',
    patients: 457,
    age: 47,
    points: 697,
  },
  {
    name: 'Dr. Jackson',
    specialization: 'Radiologist',
    patients: 457,
    age: 47,
    points: 697,
  },
  // Add more doctors as needed...
];

function DoctorLayout() {
  return (
    <div className="page-container">
      <h1 className="page-title">Our Doctors</h1>
      <div className="doctor-grid">
        {doctors.map((doc, index) => (
          <div className="doctor-card" key={index}>
           
            <h3>{doc.name}</h3>
            <p>{doc.specialization}</p>
            <button className="profile-btn">View Profile</button>
            <div className="stats">
              <div><strong>{doc.patients}</strong><span>Patient</span></div>
              <div><strong>{doc.age} yrs</strong><span>Doc age</span></div>
              <div><strong>{doc.points}</strong><span>Points</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorLayout;
