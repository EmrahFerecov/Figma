import { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from './Layouts/Home';



function App() {


  return (
    <>

    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<h1>dsfdfsdfsd</h1>} />
    </Routes>

        
    </>

    
  )
}

export default App
