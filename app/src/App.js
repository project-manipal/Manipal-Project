import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginFolder/Login";
import Register from "./Components/RegisterFolder/Register";
import "./App.css";
 import Particles from './Components/LoginFolder/Particles';
import DoctorLogin from "./Components/LoginFolder/Doctorlogin";
import AdminLogin from "./Components/LoginFolder/Adminlogin";

const App = () => {
   return (
    <BrowserRouter>
      <div className="app-container" style={{ 
        position: 'relative', minHeight: '100vh' }}>
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
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Routes>
             <Route path="/" element={<LoginPage />} /> 
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/doctorlogin" element={<DoctorLogin />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );

};
export default App
