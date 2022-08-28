import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './pages/Hero'
import Services from './pages/Services'
import About from './pages/About'
import Clients from './pages/Clients'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div className="App">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Clients />
      <Footer />
    </div>
  )
}

export default App
