import { motion } from 'framer-motion'
import './About.css'

const About = ({ scrollY = 0 }) => {
  const parallaxOffset = scrollY * 0.1

  return (
    <section className="about" id="about" style={{ backgroundPositionY: `${parallaxOffset}px` }}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Notre Histoire
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
          >
            <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800" alt="Sarah Baker Coffee intérieur" />
            
          </motion.div>

          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>La première Boulangerista</h3>
            <p>
              <strong>Sarah Baker Coffee</strong> est la première boulangerista ! Un concept unique 
              alliant l'art du boulanger à celui du barista. Nous sommes passionnés par notre métier : 
              Boulanger, Pâtissier, Viennoisier, amoureux de la brioche, Snacker, mais aussi 
              Coffee Lover.
            </p>
            <p>
              Notre carte est réalisée avec soin par notre barista autour de cafés de spécialité 
              soigneusement sélectionnés. Chaque tasse est une expérience, chaque viennoiserie 
              un moment de bonheur.
            </p>
            <p>
              Sarah Baker Coffee est aussi un <strong>lieu de vie de quartier</strong>, coloré et décalé, 
              où vous pouvez vous poser le temps d'engloutir nos merveilles sucrées et salées. 
              Un endroit unique où le café rencontre la gourmandise.
            </p>

            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">🥐</span>
                <span>Fait Maison</span>
              </div>
              <div className="feature">
                <span className="feature-icon">☕</span>
                <span>Café de Spécialité</span>
              </div>
              <div className="feature">
                <span className="feature-icon">💝</span>
                <span>Avec Amour</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
