import React from 'react'
import './AdminLayout.css'
import { Route, Routes } from 'react-router-dom'
import ADashboard from '../../Pages/AdminPages/ADashboard'
import AdminNavbar from '../../Components/Navbar/AdminNavbar/AdminNavbar'
import AdoctorPages from '../../Pages/AdminPages/AdoctorPages'
function AdminLayout() {
  
  return (
    <div> 
   <AdminNavbar/>
   <Routes>
     <Route path='/' element={<ADashboard/>}/>
     <Route path='/doctors' element={<AdoctorPages/>}/>
   </Routes>  
    </div>
  )
}

export default AdminLayout
