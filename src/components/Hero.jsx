import { motion } from 'framer-motion'
import MarqueeTitle from './MarqueeTitle'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <MarqueeTitle withContainer={true} />
          <p className="tagline">La première Boulangerista</p>
          <motion.div 
            className="hero-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <span>Boulanger + Barista</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
