
import './App.css'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import Map from './composants/map.jsx'
import Footer from './composants/footer'
import Connexion from './pages/connexion'

function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/Map" element= {<Map/>} />
      <Route path="/Footer" element= {<Footer/>} />
      <Route path="/Connexion" element= {<Connexion/>} />
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
