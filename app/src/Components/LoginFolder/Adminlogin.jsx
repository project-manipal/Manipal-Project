import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Adminlogin.css';
import doctorImg from '../../assets/Doctor11.jpg'; 

const AdminLogin = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const admins = [
      { email: "admin@manipal.com", password: "admin123" },
      { email: "super@manipal.com", password: "superadmin" },
    ];

    const isValid = admins.some(
      (user) => user.email === details.email && user.password === details.password
    
    );

    if (isValid) {
      alert("✅ Admin Login Successful");
      navigate('/admin/dashboard');
    } else {
      alert("❌ Invalid admin credentials");
    }
  };
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-image">
          <img src={doctorImg} alt="Admin" />
        </div>
        <div className="login-card">
          <h2 className="login-title">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter admin email"
              name="email"
              autoComplete="off"
              value={details.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              autoComplete="off"
              value={details.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Login</button>
          </form>
        
        </div>
      </div>
    </div>
  );
};
export default AdminLogin;
