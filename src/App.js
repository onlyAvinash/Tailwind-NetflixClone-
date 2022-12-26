import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";



function App() {
  return (
     
    <div className="scroll-smooth ">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>} />  
        </Routes>
        </BrowserRouter>
    </div>
      
  );
}

export default App;
