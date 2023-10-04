import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './composants/NavBar';
import ComposantBienvenu from './composants/ComposantBienvenu';
import Login from './assets/css/Login';
import Register from './assets/css/Register';


function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
       <Route path='/'element={<NavBar/>} />
       <Route path='ComposantBienvenu'element={<ComposantBienvenu/>} />
       <Route path='Login'element={<Login/>} />
       <Route path='Register'element={<Register/>} />
    </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
