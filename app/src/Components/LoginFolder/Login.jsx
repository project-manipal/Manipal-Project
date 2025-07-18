import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import doctorImg from '../../assets/Doctor11.jpg';
const Login = () => {
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

    const users = [
      { email: "admin@integraise.com", password: "admin123" },
      { email: "hr@integraise.com", password: "hr@123" },
    ];
    
    const isValid = users.some(
      (user) => user.email === details.email && user.password === details.password
    );

    if (isValid) {
      alert("✅ Login Successful");
      navigate('/home');
    } else {
      alert("❌ Invalid email or password");
    }
  };

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div
      className="login-wrapper"

      style={{

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div className="login-container">
        <div className="login-image">
          <img src={doctorImg} alt="Doctor" />
        </div>
        <div className="login-card">
          <h2 className="login-title">Manipal Hospital</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              autoComplete="off"
              value={details.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              autoComplete="off"
              value={details.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Login</button>
          </form>
          <p className="bottom-text">
            Don't have an account?{' '}
            <span className="link" onClick={goToRegister}>
              Register here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
