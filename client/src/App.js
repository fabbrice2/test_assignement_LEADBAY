
import { Routes, Route } from "react-router-dom"
import LandingPage from './LandingPage';
import GalleryImg from "./GalleryImg";
import UrlsHistory from "./UrlsHistory";



function App() {
  return (

  
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/results" element={<GalleryImg />} />
        <Route path="/historique" element={<UrlsHistory />}/>
      </Routes>

    </div>
  );
}


export default App;