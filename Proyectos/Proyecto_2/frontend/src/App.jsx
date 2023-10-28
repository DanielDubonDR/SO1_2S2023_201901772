import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import TiempoReal from './pages/tiempoReal'
import Estadisticas from './pages/estadisticas'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monitor" element={<Estadisticas />} />
        <Route path="/rendimiento" element={<TiempoReal />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} exact={true} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
