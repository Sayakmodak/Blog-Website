import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './comp/Navbar';
import Footer from './comp/Footer';
function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
