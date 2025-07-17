import React from 'react';
import './Doctordashboard.css';
function Dactordashboard() {
  return (
    <div>
      <main className="main-content">
        <section className="performance">
          <div className="card dark">
            <h4>Performance</h4>
            <div className="stats">
              <div><strong>76%</strong><br />Appointments</div>
              <div><strong>44%</strong><br />Cancellations</div>
            </div>
            <ul className="status-list">
              <li>🟠 New consultation added</li>
              <li>🔵 Lab report uploaded</li>
              <li>🟤 Follow-up scheduled</li>
            </ul>
          </div>

          <section className="totals">
            <div className="card-total">
              <h2>👨‍⚕️ Total Doctors</h2>
              <p className="number">25</p>
            </div>
            <div className="card-total">
              <h2>🟢 Logged In</h2>
              <p className="number">18</p>
            </div>
            <div className="card-total">
              <h2>🔵 Available Now</h2>
              <p className="number">14</p>
            </div>
            <div className="card-total">
              <h2>🔴 Offline</h2>
              <p className="number">7</p>
            </div>
          </section>

          {/* Activity Chart */}
          <div className="card">
            <h4>Weekly Activity</h4>
            <canvas id="activityChart"></canvas>
          </div>
        </section>

        {/* Engagement Cards */}
        <section className="engagement">
          <div className="card small">
            <h5>This Day</h5>
            <p>133</p>
          </div>
          <div className="card small">
            <h5>This Week</h5>
            <p>471</p>
          </div>
          <div className="card small">
            <h5>This Month</h5>
            <p>929</p>
          </div>
          <div className="card small">
            <h5>Pending</h5>
            <p>233</p>
          </div>
          <div className="card small special">
            <h5>Your New Metrics</h5>
            <button className="metric-btn">➜</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dactordashboard;
