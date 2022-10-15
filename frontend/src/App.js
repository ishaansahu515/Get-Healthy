import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import ServicePage from "./pages/ServicePage";
import About from "./pages/About";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import ServicePage from "./pages/ServicePage";

function App() {
  return (
    <div className="App" style={{maxWidth:"100vw"}}>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/services" element={<ServicePage/>} />
       </Routes>
      </Router>
    </div>
  );
}

export default App;
