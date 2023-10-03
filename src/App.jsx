
import './App.css'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import Map from './composants/map.jsx'
import Footer from './composants/footer'

function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/Map" element= {<Map/>} />
      <Route path="/Footer" element= {<Footer/>} />
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
