import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CanPileWireframe from './CanPileWireframe.jsx'
import AvisoLegal from './components/AvisoLegal.jsx'
import PoliticaPrivacidad from './components/PoliticaPrivacidad.jsx'
import PoliticaCookies from './components/PoliticaCookies.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CanPileWireframe />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/politica-cookies" element={<PoliticaCookies />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
