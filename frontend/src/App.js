import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import ServicePage from "./pages/ServicePage";
import SkinPredictPage from "./pages/SkinPredictPage";

function App() {
  return (
    <div className="App" style={{maxWidth:"100vw"}}>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/services" element={<ServicePage/>} />
        <Route path="/services/skin" element={<SkinPredictPage/>} />
       </Routes>
      </Router>
    </div>
  );
}

export default App;
