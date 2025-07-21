import React, { useState } from 'react';
import './AddminDashboard.css';
import CountUp from './Count'
<CountUp
  from={0}
  to={100}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>
const AddminDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="addmin-dashboard">
      {!isSidebarOpen && (
        <button className="Addtoggle-button" onClick={handleToggle}>
          {'☰'}
        </button>
      )}
      <aside className={isSidebarOpen ? 'Addsidebar open' : 'sidebarA'}>
         {isSidebarOpen && (
          <button className="sidebar-close-button" onClick={handleToggle}>
            ✖
          </button>
        )}
        <div className="sidebar-prof">
          <img src="/img-1.png" alt="Admin Profile" />
          <h3>Hello,Admin</h3>
        </div>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Departments</li>
            <li>Doctors</li>
            <li>Appointments</li>
            <li>Reports</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>
      <main className="dashboard-main">
        <header>
          <h1> Hospital Admin Dashboard</h1>
        </header>
        <section>
          <div>
            <h3>Patients Today</h3>
            <p>250</p>
          </div>
          <div>
            <h3>Avg. Waiting Time</h3>
            <p>20 mins</p>
          </div>
          <div>
            <h3>Available Doctors</h3>
            <p>48</p>
          </div>
          <div>
            <h3>Appointments Booked</h3>
            <p>320</p>
          </div>
        </section>
        <section>
          <div>
    <CountUp
  from={0}
  to={80}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
   />+<h4>Cardiology</h4><p>15 Doctors</p></div>
          <div>         
    <CountUp
  from={0}
  to={60}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
   />+<h4>Neurology</h4><p>10 Doctors</p></div>
          <div>         
    <CountUp
  from={0}
  to={25}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
   />+<h4>Orthopedics</h4><p>8 Doctors</p></div>
          <div>         
    <CountUp
  from={0}
  to={30}
  separator=","
  direction="up"
  duration={2}
  className="count-up-text"
   />+<h4>Pediatrics</h4><p>12 Doctors</p></div>
        </section>
        <section>
          <h2>Patient Visits Overview</h2>
          <div>
            <p>[Chart Placeholder]</p>
          </div>
        </section>
      </main>
    </div>
  );
}
export default AddminDashboard;
