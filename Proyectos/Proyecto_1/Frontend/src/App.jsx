import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Rendimiento from './pages/rendimiento'
import Monitor from './pages/monitor'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monitor" element={<Monitor />} />
        <Route path="/rendimiento" element={<Rendimiento />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} exact={true} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
