import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Rendimiento from './pages/rendimiento'
import Rendimiento2 from './pages/rendimiento2'
import Monitor from './pages/monitor'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monitor" element={<Monitor />} />
        <Route path="/rendimiento" element={<Rendimiento />} />
        <Route path="/rendimiento2" element={<Rendimiento2 />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} exact={true} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
