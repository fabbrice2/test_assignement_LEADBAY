
import { Routes, Route } from "react-router-dom"
import LandingPage from './LandingPage';
import UrlsHistory from "./UrlsHistory";
import ErrorPage from "./ErrorPage";



function App() {
  return (

  
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/url-history" element={<UrlsHistory />}/>
        <Route path="/*" element={<ErrorPage />}/>
      </Routes>

    </div>
  );
}


export default App;