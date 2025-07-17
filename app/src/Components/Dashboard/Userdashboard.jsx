import React from 'react'
import UserNavbar from '../Navbar/UserNavbar'
import './Userdashboard.css'

function Userdashboard() {
  return (
    <div>
        
      <UserNavbar />
      <div className="dashboard-wrapper">
        <h2>Welcome Back, User 👋</h2>

        <div className="stats-section">
          <div className="stat-card">
            <h3>Appointments</h3>
            <p>3 Upcoming</p>
          </div>
          <div className="stat-card">
            <h3>Messages</h3>
            <p>2 New</p>
          </div>
          <div className="stat-card">
            <h3>Doctors</h3>
            <p>5 Available</p>
          </div>
        </div>

        <div className="appointments-section">
          <h3>Upcoming Appointments</h3>
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Doctor</th>
                <th>Specialty</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>July 20, 2025</td>
                <td>Dr. Smith</td>
                <td>Cardiology</td>
                <td><span className="status upcoming">Upcoming</span></td>
              </tr>
              <tr>
                <td>July 25, 2025</td>
                <td>Dr. Allen</td>
                <td>Dermatology</td>
                <td><span className="status confirmed">Confirmed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Userdashboard
