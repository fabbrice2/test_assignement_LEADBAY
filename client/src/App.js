
import { Routes, Route } from "react-router-dom"
import LandingPage from './LandingPage';
import GalleryImg from "./GalleryImg";



function App() {
  return (

  
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/results" element={<GalleryImg />} />
      </Routes>

    </div>
  );
}


export default App;