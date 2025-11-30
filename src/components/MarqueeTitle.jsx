import { useEffect, useRef } from 'react'
import './MarqueeTitle.css'

const MarqueeTitle = ({ withContainer = false }) => {
  const svgContainerRef = useRef(null)

  useEffect(() => {
    if (!svgContainerRef.current) return

    const bulbs = svgContainerRef.current.querySelectorAll('.led-bulb')
    const timers = []
    
    // Animation des ampoules LED avec clignotement aléatoire non synchronisé
    bulbs.forEach((bulb) => {
      const flicker = () => {
        const randomDuration = 80 + Math.random() * 150
        
        // Probabilité de clignotement (effet vieille enseigne)
        if (Math.random() < 0.25) {
          bulb.style.opacity = '0.2'
          bulb.style.filter = 'none'
          
          const restoreTimer = setTimeout(() => {
            bulb.style.opacity = '1'
            bulb.style.filter = 'url(#bulbGlow)'
          }, randomDuration)
          timers.push(restoreTimer)
        }
        
        // Programmer le prochain clignotement avec délai aléatoire
        const nextTimer = setTimeout(flicker, 400 + Math.random() * 2500)
        timers.push(nextTimer)
      }
      
      // Démarrer chaque ampoule avec un délai aléatoire différent
      const startTimer = setTimeout(flicker, Math.random() * 2000)
      timers.push(startTimer)
    })

    // Cleanup pour éviter les memory leaks
    return () => {
      timers.forEach(timer => clearTimeout(timer))
    }
  }, [])

  const content = (
    <div className="marquee-title" ref={svgContainerRef}>
      <svg viewBox="0 0 950 200" className="marquee-svg">
        <defs>
          {/* Filtre glow lumineux pour les ampoules */}
          <filter id="bulbGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Gradient pour les lettres rouges style cabaret */}
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e60000"/>
            <stop offset="50%" stopColor="#cc0000"/>
            <stop offset="100%" stopColor="#990000"/>
          </linearGradient>
        </defs>

        {/* S */}
        <g className="letter-group" transform="translate(20, 20)">
          <text x="40" y="115" textAnchor="middle" fontSize="130" fontWeight="400" fill="#cc0000" fontFamily="Bebas Neue, sans-serif">S</text>
          <circle className="led-bulb" cx="10" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="40" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="10" cy="80" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="80" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="10" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="40" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
        </g>

        {/* A */}
        <g className="letter-group" transform="translate(110, 20)">
          <text x="40" y="115" textAnchor="middle" fontSize="130" fontWeight="400" fill="#cc0000" fontFamily="Bebas Neue, sans-serif">A</text>
          <circle className="led-bulb" cx="10" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="40" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="10" cy="80" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="80" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="10" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="40" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
        </g>

        {/* R */}
        <g className="letter-group" transform="translate(200, 20)">
          <text x="40" y="115" textAnchor="middle" fontSize="130" fontWeight="400" fill="#cc0000" fontFamily="Bebas Neue, sans-serif">R</text>
          <circle className="led-bulb" cx="10" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="40" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="10" cy="80" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="80" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="10" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="40" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
        </g>

        {/* A */}
        <g className="letter-group" transform="translate(290, 20)">
          <text x="40" y="115" textAnchor="middle" fontSize="130" fontWeight="400" fill="#cc0000" fontFamily="Bebas Neue, sans-serif">A</text>
          <circle className="led-bulb" cx="10" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="40" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="10" cy="80" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="80" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="10" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="40" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
        </g>

        {/* H */}
        <g className="letter-group" transform="translate(380, 20)">
          <text x="40" y="115" textAnchor="middle" fontSize="130" fontWeight="400" fill="#cc0000" fontFamily="Bebas Neue, sans-serif">H</text>
          <circle className="led-bulb" cx="10" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="40" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="10" cy="80" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="80" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="10" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="40" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
        </g>

        {/* B */}
        <g className="letter-group" transform="translate(490, 20)">
          <text x="40" y="115" textAnchor="middle" fontSize="130" fontWeight="400" fill="#cc0000" fontFamily="Bebas Neue, sans-serif">B</text>
          <circle className="led-bulb" cx="10" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="40" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="10" cy="80" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="80" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="10" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="40" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
        </g>

        {/* A */}
        <g className="letter-group" transform="translate(580, 20)">
          <text x="40" y="115" textAnchor="middle" fontSize="130" fontWeight="400" fill="#cc0000" fontFamily="Bebas Neue, sans-serif">A</text>
          <circle className="led-bulb" cx="10" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="40" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="10" cy="80" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="80" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="10" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="40" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
        </g>

        {/* K */}
        <g className="letter-group" transform="translate(670, 20)">
          <text x="40" y="115" textAnchor="middle" fontSize="130" fontWeight="400" fill="#cc0000" fontFamily="Bebas Neue, sans-serif">K</text>
          <circle className="led-bulb" cx="10" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="40" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="10" cy="80" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="80" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="10" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="40" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
        </g>

        {/* E */}
        <g className="letter-group" transform="translate(760, 20)">
          <text x="40" y="115" textAnchor="middle" fontSize="130" fontWeight="400" fill="#cc0000" fontFamily="Bebas Neue, sans-serif">E</text>
          <circle className="led-bulb" cx="10" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="40" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="10" cy="80" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="80" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="10" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="40" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
        </g>

        {/* R */}
        <g className="letter-group" transform="translate(850, 20)">
          <text x="40" y="115" textAnchor="middle" fontSize="130" fontWeight="400" fill="#cc0000" fontFamily="Bebas Neue, sans-serif">R</text>
          <circle className="led-bulb" cx="10" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="40" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="10" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="10" cy="80" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="80" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="10" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="40" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
          <circle className="led-bulb" cx="70" cy="150" r="5" fill="#ffd700" filter="url(#bulbGlow)"/>
        </g>
      </svg>
    </div>
  )

  if (withContainer) {
    return (
      <div className="marquee-container">
        {content}
      </div>
    )
  }

  return content
}

export default MarqueeTitle
