import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import DashBoard from './pages/DashBoard';
import Auth from './pages/Auth';
import Share from "./pages/Share";
import { DashBoardBodyContextProvider } from "./contexts/DashBoardBodyContext";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<DashBoardBodyContextProvider>
          <DashBoard />
        </DashBoardBodyContextProvider>} />
        <Route path='/signup' element={<Auth title="Sign Up"/>} />
        <Route path='/login' element={<Auth title="Log In"/>} />
        <Route path='/brain/share/:hash' element={<Share />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
