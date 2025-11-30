import { motion } from 'framer-motion'
import './Reviews.css'

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Mahery Ratsimavo",
      rating: 5,
      date: "il y a un mois",
      text: "Ce café situé à Sceaux est parfait et sûrement l'un des meilleurs du coin. Le service est totalement à la hauteur et l'ambiance digne du cadre. Les serveurs sont accueillants, chaleureux et respectueux (mention spéciale pour le jeune monsieur aux lunettes). Les produits sont de qualités..."
    },
    {
      id: 2,
      name: "Enjoyyourkingdom",
      rating: 3,
      date: "il y a une semaine",
      text: "Le lieu est top pour une pause, travailler ou même passer un bon moment avec des proches. La déco et la propreté est appréciable, par contre les pâtisseries ne valent pas leur prix honnêtement et encore moins les boissons malheureusement..."
    },
    {
      id: 3,
      name: "Cheyenne Ramananjaona",
      rating: 5,
      date: "il y a 3 mois",
      text: "Je suis passée hier le 12/08, la pâtisserie que j'ai prise était bonne et ma boisson aussi !!! Merci à la serveuse qui a été super sympa et agréable ! Je recommande et je reviendrai avec plaisir !"
    },
    {
      id: 4,
      name: "Bakanikina Kinzonzi",
      rating: 5,
      date: "il y a 2 mois",
      text: "Endroit cosy, chaleureux et propre. Personnel souriant et accueillant. Prix raisonnable et on y mange bien."
    },
    {
      id: 5,
      name: "Adl",
      rating: 3,
      date: "il y a 2 mois",
      text: "La décoration est agréable, l'ambiance pourrait être bien si la musique était un peu moins forte et le personnel plus agréable. Leurs boissons lactées sont à fuir, que du lait aucun goût. Leurs pâtisseries sont pas si mal ceci dit..."
    }
  ]

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : 'empty'}`}>
        ★
      </span>
    ))
  }

  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)

  return (
    <section className="reviews" id="avis">
      <div className="reviews-container">
        <motion.div 
          className="reviews-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="google-badge">
            <svg className="google-icon" viewBox="0 0 24 24" width="32" height="32">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Avis Google</span>
          </div>
          <h2>CE QUE DISENT NOS CLIENTS</h2>
          <div className="average-rating">
            <span className="average-score">{averageRating}</span>
            <div className="average-stars">{renderStars(Math.round(averageRating))}</div>
            <span className="total-reviews">({reviews.length} avis)</span>
          </div>
        </motion.div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="review-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="review-header">
                <div className="reviewer-avatar">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div className="reviewer-info">
                  <h4>{review.name}</h4>
                  <span className="review-date">{review.date}</span>
                </div>
              </div>
              <div className="review-stars">
                {renderStars(review.rating)}
              </div>
              <p className="review-text">{review.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="https://www.google.com/search?sca_esv=c487812340739c8c&sxsrf=AE3TifMOqIO2jNwPwx78yiEUooOdpjDolw:1764491742950&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-Ezc5t9xBip3Xx2vxMn7FQrPQYW0W9alsOFrY3d1UEyq5e9cOQZedtpPClhLJn6hPKeS3uxm7uVGi4GPdgdkjFQ7hF9qu&q=Sarah+Baker+Coffee+Avis&sa=X&ved=2ahUKEwiLvbD8u5mRAxXQdfUHHTJSAb0Q0bkNegQIJhAD&biw=1707&bih=979&dpr=1.5"
          target="_blank"
          rel="noopener noreferrer"
          className="google-reviews-btn"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Laisser un avis sur Google
        </motion.a>
      </div>
    </section>
  )
}

export default Reviews
