import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import ServicePage from "./pages/ServicePage";
import About from "./pages/About";

function App() {
  return (
    <div className="App" >
      <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/services" element={<ServicePage/>} />
        <Route path="/About" element={<About/>} />
       </Routes>
      </Router>
    </div>
  );
}

export default App;
