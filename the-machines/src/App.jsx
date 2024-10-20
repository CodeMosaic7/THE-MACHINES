import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Landingpage from "./pages/Landingpage"
import './index.css';
import Home from "./pages/Home";
import Brands from "./pages/Brands"
import Images from "./pages/Images"
import Compare from "./pages/Compare"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/brands" element={<Brands/>}/>
        <Route path="/images" element={<Images/>}/>
        <Route path="/compare" element={<Compare/>}/>
      </Routes>
    </Router>
  )
}

export default App
