import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import MouseCircle from "./Components/MouseCircle/MouseCircle"
import Navbar from "./Components/Navbar/Navbar"

import Home from "./Components/Pages/Home"
import Projects from "./Components/Pages/Projects"
import About from "./Components/Pages/About"
import Contact from "./Components/Pages/Contact"

function App() {


  return (
    <div>
      <MouseCircle />
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
