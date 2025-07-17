import React from 'react'
import './UserNavbar';

function DoctorLayoutNavbar() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">Doctor Layout</div>
        <div className="nav-links">
          <a href="#" className="active">Home</a>
          <a href="#">Doctors</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <a className="appointment-btn" href="#">Book Now</a>
      </div>
    </div>
  )
}

export default DoctorLayoutNavbar
