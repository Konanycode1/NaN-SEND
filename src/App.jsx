import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Fil from './composants/fil'
import Message from './composants/message'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/fil" element={<Fil/>}/>
        <Route path="/" element={<Message/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
