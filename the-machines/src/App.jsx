import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Landingpage from "./pages/Landingpage"
import './index.css';
import Home from "./pages/Home";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
