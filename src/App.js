import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import GuestApp from './Layouts/GuestLayouts/GuestLayout.jsx'
import AdminApp from './Layouts/AdminLayouts/AdminLayout.jsx'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <GuestApp/>  
        }/>
        <Route path='/admin/*' element={<AdminApp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
