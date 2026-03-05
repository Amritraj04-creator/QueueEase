import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import RegisterClinic from "./pages/RegisterClinic"

function App() {
  return (
    <>
    <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register-clinic" element={<RegisterClinic />} />
      </Routes>
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-blue-600">
        Welcome to QueueEase
      </h1>
    </div>
    </>
  )
}

export default App
