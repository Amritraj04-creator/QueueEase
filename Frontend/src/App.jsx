import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import RegisterClinic from "./pages/RegisterClinic"
import Footer from "./components/Footer"
import ForgotPassword from "./pages/ForgotPassword"
import Dashboard from "./pages/Dashboard";
import ClinicDashboard from './pages/ClinicDashboard'

function App() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="grow">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register-clinic" element={<RegisterClinic />} />
        <Route path="clinic-dashboard" element={<ClinicDashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </main>
    <Footer />
    </div>
    </>
  )
}

export default App
