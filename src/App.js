import './App.css';
import { BrowserRouter as Router,Routes, Route, BrowserRouter } from 'react-router-dom';
import FooterGuest from './Components/Navbar/Footer/FooterGuest';
import FooterDoctor from './Components/Navbar/Footer/FooterAdmin';
import FooterAdmin from './Components/Navbar/Footer/FooterDoctor';
import FooterPatient from './Components/Navbar/Footer/FooterPatient';
import GuestApp from './Layouts/GuestLayouts/GuestLayout.jsx';
import AdminApp from './Layouts/AdminLayouts/AdminLayout.jsx';

function App() {
  return (
    
      <div className="App">
        <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<GuestApp />} />
          <Route path="/admin/*" element={<AdminApp />} />
          <Route path="/FooterDoctor" element={<FooterDoctor />} />
          <Route path="/FooterAdmin" element={<FooterAdmin />} />
          <Route path="/FooterPatient" element={<FooterPatient />} />
          <Route path="/FooterGuest" element={<FooterGuest />} />
          
        </Routes>
      
   
    </BrowserRouter>

  
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      </div> 
    </div>
    );
  }


export default App;
