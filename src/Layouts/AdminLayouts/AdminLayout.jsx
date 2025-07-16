import React from 'react'
import './AdminLayout.css'
import { Route, Routes } from 'react-router-dom'
import ADashboard from '../../Pages/AdminPages/ADashboard'
import AdminNavbar from '../../Components/Navbar/AdminNavbar/AdminNavbar'

function AdminLayout() {
  
  return (
    <div> 
   <AdminNavbar/>
   <Routes>
     <Route path='/' element={<ADashboard/>}/>
   </Routes>  
    </div>
  )
}

export default AdminLayout
