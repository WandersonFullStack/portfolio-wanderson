import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { GlobalStyles } from './styles/GlobalStyles.js'
import Home from './pages/Home/index.jsx'
import Projects from './pages/Projects/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <GlobalStyles/>
    </BrowserRouter>
  </StrictMode>,
)
