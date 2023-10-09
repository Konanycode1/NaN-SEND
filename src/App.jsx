
import './App.css'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import Map from './composants/map.jsx'
import Footer from './composants/footer.jsx'
import Connexion from './pages/connexion.jsx'
import Inscription from './pages/Inscription.jsx'
import Formulaire from './pages/formInscription'
import Verification from './pages/verification'

function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/Map" element= {<Map/>} />
      <Route path="/Footer" element= {<Footer/>} />
      <Route path="/Connexion" element= {<Connexion/>} />
      <Route path="/Inscription" element= {<Inscription/>} />
      <Route path="/Formulaire" element= {<Formulaire/>} />
      <Route path="/Verification" element= {<Verification/>} />
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
