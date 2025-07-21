import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import GuestApp from './Layouts/GuestLayouts/GuestLayout.jsx'
import AdminApp from './Layouts/AdminLayouts/AdminLayout.jsx'
import AddminDashboard from './Pages/Dashboard/AddminDashboard.jsx';
import GuestDashboard from './Pages/Dashboard/GuestDashboard.jsx';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<GuestApp/>  }/>
        <Route path='/admin/*' element={<AdminApp/>}/>
        <Route path='/AddminDashboard/*' element={<AddminDashboard/>}/>
        <Route path='/GuestDashboard/*' element={<GuestDashboard/>}/>
        
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
