import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Automatisation from './composants/automatisation/Automatisation';


function App() {

  return (
      <Routes>
        <Route path="/" element={<Automatisation />}/> 
      </Routes>
  ) 
}
export default App
