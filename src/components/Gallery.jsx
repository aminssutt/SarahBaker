import { motion } from 'framer-motion'
import './Gallery.css'

const Gallery = ({ scrollY = 0 }) => {
  const parallaxOffset = scrollY * 0.03
  const images = [
    {
      src: "/images/image 1.jpg",
      alt: "Création Sarah Baker",
      caption: "Nos créations"
    },
    {
      src: "/images/image 2.jpg",
      alt: "Intérieur Sarah Baker",
      caption: "Notre univers"
    },
    {
      src: "/images/image 3.jpg",
      alt: "Viennoiseries",
      caption: "Viennoiseries"
    },
    {
      src: "/images/image 4.jpg",
      alt: "Café de spécialité",
      caption: "Café de spécialité"
    },
    {
      src: "/images/image 5.jpg",
      alt: "Donuts artisanaux",
      caption: "Donuts maison"
    },
    {
      src: "/images/image 6.jpg",
      alt: "Boulangerie",
      caption: "Boulangerie"
    }
  ]

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Notre Univers
        </motion.h2>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <motion.div 
              className={`gallery-item ${index === 0 || index === 3 ? 'large' : ''}`}
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ transform: `translateY(${parallaxOffset * (index % 2 === 0 ? 0.5 : -0.3)}px)` }}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <span>{image.caption}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="instagram-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Suivez-nous sur Instagram</h3>
          <p>Pour encore plus de gourmandise et nos dernières créations</p>
          <a 
            href="https://www.instagram.com/sarahbakercoffee/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @sarahbakercoffee
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
