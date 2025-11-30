import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './ScrollSlogan.css'

const ScrollSlogan = ({ scrollY }) => {
  const sloganWords = [
    "Café de spécialité",
    "•",
    "Lunch",
    "•",
    "Barista",
    "•",
    "Pâtisseries",
    "•",
    "Viennoiseries",
    "•",
    "Boulangerie"
  ]

  const finalSlogan = "Je t'aime, je te mange"

  const [visibleWords, setVisibleWords] = useState(0)
  const [showFinalSlogan, setShowFinalSlogan] = useState(false)

  useEffect(() => {
    const startScroll = 300
    const endScroll = 1200
    const progress = Math.min(Math.max((scrollY - startScroll) / (endScroll - startScroll), 0), 1)
    
    const wordsToShow = Math.floor(progress * sloganWords.length)
    setVisibleWords(wordsToShow)

    if (progress >= 0.9) {
      setShowFinalSlogan(true)
    } else {
      setShowFinalSlogan(false)
    }
  }, [scrollY])

  return (
    <section className="scroll-slogan">
      <div className="slogan-container">
        <div className="slogan-words">
          {sloganWords.map((word, index) => (
            <motion.span
              key={index}
              className={`slogan-word ${index < visibleWords ? 'visible' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: index < visibleWords ? 1 : 0,
                y: index < visibleWords ? 0 : 30
              }}
              transition={{ duration: 0.5 }}
            >
              {word}
            </motion.span>
          ))}
        </div>
        
        <motion.div 
          className={`final-slogan ${showFinalSlogan ? 'visible' : ''}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: showFinalSlogan ? 1 : 0,
            scale: showFinalSlogan ? 1 : 0.8
          }}
          transition={{ duration: 0.8 }}
        >
          <span className="heart">❤️</span>
          <h2>{finalSlogan}</h2>
          <span className="heart">❤️</span>
        </motion.div>
      </div>
    </section>
  )
}

export default ScrollSlogan
