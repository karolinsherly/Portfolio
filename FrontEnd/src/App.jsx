import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Allcom from "./pages/Allcom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App(){
  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Allcom />} />
          <Route path="/Home" element={<><Navbar/><Home/></>} />
         </Routes>
    </BrowserRouter>
        </>
  )
}

export default App