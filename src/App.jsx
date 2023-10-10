import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fil from "./composants/fil";
import Contacts from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Acceuil from "./pages/Acceuil";
import Profiles from "./pages/Profile";
import Rapports from "./pages/Rapport";
// import React, { Suspense } from "react";
import NavBar from "./composants/NavBar";
import ComposantBienvenu from "./composants/ComposantBienvenu";
import Login from "./assets/css/Login";
import Register from "./assets/css/Register";
import Slider from "./composants/Slider";
import Map from "./composants/map.jsx";
import Footer from "./composants/footer.jsx";
import Connexion from "./pages/connexion.jsx";
import Inscription from "./pages/Inscription.jsx";
import Formulaire from "./pages/formInscription";
import Automatisation from "./composants/automatisation/Automatisation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/rapports" element={<Rapports />} />
        <Route path="/profile" element={<Profiles />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/fil" element={<Fil />} />
        <Route path="/" element={<Acceuil />} />
        <Route path="/NavBar" element={<NavBar />} />
        <Route path="/ComposantBienvenu" element={<ComposantBienvenu />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Slider" element={<Slider />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/Formulaire" element={<Formulaire />} />
        <Route path="/automatisation" element={<Automatisation />} />
      </Routes>
    </>
  );
}
export default App;
