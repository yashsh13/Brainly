import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import DashBoard from './pages/DashBoard';
import Auth from './pages/Auth';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/signup' element={<Auth title="Sign Up"/>} />
        <Route path='/login' element={<Auth title="Log In"/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
