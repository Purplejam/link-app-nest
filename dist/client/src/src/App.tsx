import React from 'react'
import { ErrorPage } from './components/ErrorPage'
import { Footer } from './components/Footer'
import { GlobalStyle } from './components/GlobalStyles'
import { Home } from './components/Home'
import { Nav } from './components/Nav'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <ErrorPage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
