import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import DashBoard from './pages/DashBoard';
import Auth from './pages/Auth';
import Share from "./pages/Share";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/signup' element={<Auth title="Sign Up"/>} />
        <Route path='/login' element={<Auth title="Log In"/>} />
        <Route path='/brain/share/:hash' element={<Share />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
