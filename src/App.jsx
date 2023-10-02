
import './App.css'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import Map from './composants/map.jsx'

function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/Map" element= {<Map/>} />
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
