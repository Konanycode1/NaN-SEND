import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './composants/NavBar';


function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
       <Route path='/'element={<NavBar/>} />
    </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
