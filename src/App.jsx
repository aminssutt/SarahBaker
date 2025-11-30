import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollSlogan from './components/ScrollSlogan'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <ScrollSlogan scrollY={scrollY} />
      <About scrollY={scrollY} />
      <Menu scrollY={scrollY} />
      <Gallery scrollY={scrollY} />
      <Reviews />
      <Contact scrollY={scrollY} />
      <Footer />
    </div>
  )
}

export default App
