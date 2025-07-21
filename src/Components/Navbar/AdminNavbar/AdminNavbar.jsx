import React from 'react'
import './AdminNavbar.css'
import { Link } from 'react-router-dom'

function AdminNavbar() {
  return (
    
         <div className='AN-Container'>
        <img src='' alt='manipal-logo'/>
        <ul>
            <Link to='/admin/doctors'><li>Doctors</li></Link>
            <li>Patients</li>
            <li>security</li>
            <Link to='/admin' ><li>Admin Dashboard</li></Link>
        </ul>
        <button>
            Login

        </button>
      
    </div>
  )
}

export default AdminNavbar
