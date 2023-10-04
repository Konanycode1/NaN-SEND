import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Fil from './composants/fil'
import Message from './composants/message'
import Dashboard from './pages/dashboard'
import TopBar from './composants/topBar'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/topBar" element={<TopBar/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/fil" element={<Fil/>}/>
        <Route path="/" element={<Message/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
