import { motion } from 'framer-motion'
import './Contact.css'

const Contact = ({ scrollY = 0 }) => {
  const parallaxOffset = scrollY * 0.02
  const openingHours = [
    { day: "Lundi", hours: "Fermé" },
    { day: "Mardi", hours: "7h30 - 19h00" },
    { day: "Mercredi", hours: "7h30 - 19h00" },
    { day: "Jeudi", hours: "7h30 - 19h00" },
    { day: "Vendredi", hours: "7h30 - 19h00" },
    { day: "Samedi", hours: "8h00 - 19h00" },
    { day: "Dimanche", hours: "8h00 - 14h00" }
  ]

  return (
    <section className="contact" id="contact" style={{ backgroundPositionY: `${parallaxOffset}px` }}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
        >
          Nous Trouver
        </motion.h2>

        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3>Adresse</h3>
                <p>1 Av. de Robinson</p>
                <p>92290 Châtenay-Malabry, France</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h3>Téléphone</h3>
                <a href="tel:+33186040519">+33 1 86 04 05 19</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">🕐</div>
              <div className="info-content">
                <h3>Horaires d'ouverture</h3>
                <div className="hours-grid">
                  {openingHours.map((item, index) => (
                    <div className={`hours-row ${item.hours === 'Fermé' ? 'closed' : ''}`} key={index}>
                      <span className="day">{item.day}</span>
                      <span className="hours">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="info-card social">
              <div className="info-icon">💗</div>
              <div className="info-content">
                <h3>Suivez-nous</h3>
                <div className="social-buttons">
                  <a href="https://www.instagram.com/sarahbakercoffee/" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                  <a href="https://www.tiktok.com/@sarahbakercoffee" target="_blank" rel="noopener noreferrer">
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-map"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.8876543210!2d2.2658!3d48.7658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67a0c8a7b1b1b%3A0x0!2s1%20Av.%20de%20Robinson%2C%2092290%20Ch%C3%A2tenay-Malabry!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sarah Baker Coffee Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
