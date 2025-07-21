import React, { useState, useEffect } from 'react';
import './AdminLayout.css';
import { Route, Routes } from 'react-router-dom';
import ADashboard from '../../Pages/AdminPages/ADashboard';
import AdminNavbar from '../../Components/Navbar/AdminNavbar/AdminNavbar';
import AdoctorPages from '../../Pages/AdminPages/AdoctorPages';
import FooterAdmin from '../../Components/Footer/FooterAdmin';

function AdminLayout() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 100; // 100px from bottom
      setShowFooter(scrollPosition >= threshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <AdminNavbar />
      <Routes>
        <Route path='/' element={<ADashboard />} />
        <Route path='/doctors' element={<AdoctorPages />} />
      </Routes>
      {showFooter && <FooterAdmin />}
    </div>
  );
}

export default AdminLayout;
