import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserLogin.css';
import './Particles.css';
import doctorImg from '../../assets/Doctor11.jpg';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Particles from './Particles';

const UserLogin = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

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
    navigate('/userregister');
  };

  return (
    <div className="app-container" style={{ position: 'relative', minHeight: '100vh' }}>
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 0,
        top: 0,
        left: 0
      }}>
        <Particles
          particleColors={['#ffffffde', '#fffefeff']}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="login-wrapper"
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
                <div className="password-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    name="password"
                    autoComplete="off"
                    value={details.password}
                    onChange={handleChange}
                    required
                  />
                  <span className="toggle-icon" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                <button  className='btnstyle'type="submit">Login</button>
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
      </div>
    </div>
  );
};

export default UserLogin;
