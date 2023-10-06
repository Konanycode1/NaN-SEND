import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Fil from './composants/fil'
import Message from './composants/message'
import Dashboard from './pages/dashboard'
import TopBar from './composants/topBar'
import Rapport from './composants/rapport'
import Broadcast from './composants/ broadcast'
import Accueil from './pages/acceuil'
import Profiles from './pages/Profile'
import Rapports from './pages/Rapport'
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/Rapports" element={<Rapports/>}/>
      <Route path="/Profile" element={<Profiles/>}/>
        <Route path="/broadcast" element={<Broadcast/>}/>
        <Route path="/rapport" element={<Rapport/>}/>
        <Route path="/topBar" element={<TopBar/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/fil" element={<Fil/>}/>
        <Route path="/" element={<Accueil/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
