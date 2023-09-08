import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutMePage from "./pages/AboutMePage";
import './style/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about-me" element={<AboutMePage />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
