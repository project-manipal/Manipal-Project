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
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import FooterAdmin from './Components/Navbar/Footer/FooterAdmin.jsx'
import FooterDoctor from './Components/Navbar/Footer/FooterDoctor.jsx';
import FooterPatient from './Components/Navbar/Footer/FooterPatient.jsx';
import FooterGuest from './Components/Navbar/Footer/FooterGuest.jsx';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <FooterGuest/>  
        }/>
                <Route path='/FooterGuest/*' element={<FooterGuest/>}></Route>

        <Route path='/FooterAdmin/*' element={<FooterAdmin/>}></Route>
                <Route path='/FooterDoctor/*' element={<FooterDoctor/>}></Route>
        <Route path='/FooterPatient/*' element={<FooterPatient/>}></Route>


      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
