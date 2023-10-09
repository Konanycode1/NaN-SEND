import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Fil from './composants/fil'
import Contacts from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Accueil from './pages/Acceuil'
import Profiles from './pages/Profile'
import Rapports from './pages/Rapport'
import ImportContacts from './pages/importContact'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/importContact" element={<ImportContacts />} />
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/rapports" element={<Rapports/>}/>
        <Route path="/profile" element={<Profiles/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/fil" element={<Fil/>}/>
        <Route path="/" element={<Accueil/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
