import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserRegister.css';
import '../../Components/LoginFolder/Particles.css';
import doctorImg from '../../assets/Doctor11.jpg';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Particles from '../../Components/LoginFolder/Particles.jsx'; 

const UserRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email';
    if (formData.password.length < 6) newErrors.password = 'Min 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setTimeout(() => {
        alert("✅ Registration successful");
        navigate('/userlogin');
        setLoading(false);
      }, 2000);
    }
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
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="login-container">
            <div className="login-image">
              <img src={doctorImg} alt="Doctor" />
            </div>
            <div className="login-card">
              <h2 className="login-title">Create Account</h2>
              <form onSubmit={handleRegister}>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="error">{errors.name}</span>}

                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}

                <div className="password-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="password-input"
                  />
                  <span
                    className="toggle-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                {errors.password && <span className="error">{errors.password}</span>}

                <input
                  type="password"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}

                <button type="submit" disabled={loading}>
                  {loading ? <div className='spinner'></div> : 'Register'}
                </button>
              </form>

              <p className="bottom-text">
                Already have an account?{' '}
                <span className="link" onClick={() => navigate('/userlogin')}>Login here</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
