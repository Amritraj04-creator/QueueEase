import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
    <Navbar />
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-blue-600">
        Welcome to QueueEase
      </h1>
    </div>
    </>
  )
}

export default App
