import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterGuest from './Components/Navbar/Footer/FooterGuest';
import FooterDoctor from './Components/Navbar/Footer/FooterAdmin';
import FooterAdmin from './Components/Navbar/Footer/FooterDoctor';
import FooterPatient from './Components/Navbar/Footer/FooterPatient';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/FooterDoctor" element={<FooterDoctor />} />
          <Route path="/FooterAdmin" element={<FooterAdmin />} />
          <Route path="/FooterPatient" element={<FooterPatient />} />
          <Route path="/" element={<FooterGuest />} />
        </Routes>
      </div>
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      </div>
    </Router>
  );
}
export default App;
