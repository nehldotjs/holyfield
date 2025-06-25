import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'

import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import About from './Components/About'
import CornerdButton from './PropAssetss/CornerdButton'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />

      < CornerdButton />
    </div>
  )
}

export default App
