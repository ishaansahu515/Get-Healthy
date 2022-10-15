import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicePage from "./pages/ServicePage";
import About from "./pages/About";
import SkinPredictPage from "./pages/SkinPredictPage";
import HepatitsPredictPage from "./pages/HepatitsPredictPage";
import StomachPredictPage from "./pages/StomachPredictPage";

function App() {
  return (
    <div className="App" style={{ maxWidth: "100vw" }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/about" element={<About />} />
         <Route path="/services/skin" element={<SkinPredictPage/>} />
         <Route path="/services/hepatitis" element={<HepatitsPredictPage/>} />
         <Route path="/services/stomach" element={<StomachPredictPage/>} />
       </Routes>
      </Router>
    </div>
  );
}

export default App;
