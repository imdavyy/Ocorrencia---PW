import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import LoginProfessor from './LoginProfessor.jsx'
import RegistrarOcorrencia from './RegistrarOcorrencia.jsx'
import Home from './Home.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
  <Routes>
      <Route path="/" element={<LoginProfessor />} /> 
      <Route path="/login" element={<LoginProfessor/>} />
      <Route path="/registrar" element={<RegistrarOcorrencia />} />

      </Routes>
      </Router>
    
    </div>

  )
}

export default App
