import './App.css';
import { BrowserRouter as Router,Routes, Route, BrowserRouter } from 'react-router-dom';
import FooterGuest from './Components/Footer/FooterGuest.jsx';
import FooterDoctor from './Components/Footer/FooterAdmin.jsx';
import FooterAdmin from './Components/Footer/FooterDoctor.jsx';
import FooterPatient from './Components/Footer/FooterPatient.jsx';
import GuestApp from './Layouts/GuestLayouts/GuestLayout.jsx';
import AdminApp from './Layouts/AdminLayouts/AdminLayout.jsx';
import AddminDashboard from './Dashboard/AddminDashboard.jsx';
import GuestDashboard from './Dashboard/GuestDashboard.jsx';

function App() {
return(
<div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<GuestApp/>  }/>
        <Route path='/admin/*' element={<AdminApp/>}/>
        <Route path='/AddminDashboard/*' element={<AddminDashboard/>}/>
        <Route path='/GuestDashboard/*' element={<GuestDashboard/>}/>
        
          <Route path="/" element={<GuestApp />} />
          <Route path="/admin/*" element={<AdminApp />} />
          <Route path="/FooterDoctor" element={<FooterDoctor />} />
          <Route path="/FooterAdmin" element={<FooterAdmin />} />
          <Route path="/FooterPatient" element={<FooterPatient />} />
          <Route path="/FooterGuest" element={<FooterGuest />} />
          <Route path="/AddminDashboard" element={<AddminDashboard/>}/>
          <Route path="/GuestDashboard" element={<GuestDashboard/>}/>
          
        </Routes>
      
   
    </BrowserRouter>

  
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      </div> 
    </div>
)
    

  }


export default App;
