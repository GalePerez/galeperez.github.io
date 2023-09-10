import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutMePage from "./pages/AboutMePage";
import WebsiteGalleryPage from "./pages/WebsiteGalleryPage";
import ArtworkPage from "./pages/ArtworkPage.jsx"
import './style/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/landing-page" element={<LandingPage />} />
            <Route path="/about-me" element={<AboutMePage />} />
            <Route path="/website" element={<WebsiteGalleryPage />} />
            <Route path="/artworks" element={<ArtworkPage />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
