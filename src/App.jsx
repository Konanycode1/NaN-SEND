import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Fil from './composants/fil'
import Contacts from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Accueil from './pages/Acceuil'
import Profiles from './pages/Profile'
import Rapports from './pages/Rapport'
import React, { Suspense } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import NavBar from "./composants/NavBar";
import ComposantBienvenu from "./composants/ComposantBienvenu";
import Login from "./assets/css/Login";
import Register from "./assets/css/Register";
import Slider from "./composants/Slider";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/rapports" element={<Rapports/>}/>
      <Route path="/profile" element={<Profiles/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/fil" element={<Fil/>}/>
        <Route path="/" element={<Accueil/>}/>
     
          <Route path="/NavBar" element={<NavBar />} />
          <Route path="/ComposantBienvenu" element={<ComposantBienvenu />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Slider" element={<Slider/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
