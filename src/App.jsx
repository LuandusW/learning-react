import { use, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Minombre from './components/State Lift/Minombre';
import Saludos from './components/State Lift/Saludos';
import Click from './components/State Lift/Click';
import './App.css'
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Empresa from './pages/Empresa';
import Navbar from './components/layout/Navbar';
function App() {
  const [color, setColor] = useState("");

  return (
    <>
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Empresa" element={<Empresa />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </>
  )
}

export default App
