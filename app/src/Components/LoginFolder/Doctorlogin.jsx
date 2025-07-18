import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Doctorlogin.css';
import doctorImg from '../../assets/Doctor11.jpg';

const DoctorLogin = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const doctorUsers = [
      { email: "doctor@integraise.com", password: "doc123" },
    ];
    const isValid = doctorUsers.some(
      (user) => user.email === details.email && user.password === details.password
    );
    if (isValid) {
      alert("✅ Doctor Login Successful");
      navigate('/home');
    } else {
      alert("❌ Invalid doctor credentials");
    }
  };
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-image">
          <img src={doctorImg} alt="Doctor" />
        </div>
        <div className="login-card">
          <h2 className="login-title">Doctor Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={details.email}
              onChange={handleChange}
              required
            />
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                name="password"
                value={details.password}
                onChange={handleChange}
                required
              />
              <span className="toggle-icon" onClick={togglePasswordVisibility}>
              </span>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default DoctorLogin;
