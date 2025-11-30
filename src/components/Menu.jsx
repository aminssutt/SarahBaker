import { motion } from 'framer-motion'
import './Menu.css'

const Menu = ({ scrollY = 0 }) => {
  const parallaxOffset = scrollY * 0.05
  const menuCategories = [
    {
      title: "Viennoiserie Maison",
      icon: "🥐",
      items: [
        { name: "Croissant", price: "2,00 €" },
        { name: "Chocolatine", price: "2,20 €" },
        { name: "Croissant Amandes", price: "3,60 €" },
        { name: "Choco Amandes", price: "3,90 €" },
        { name: "Babka", price: "4,50 €" },
        { name: "Crofin", price: "4,90 €" },
        { name: "Éclair", price: "4,90 €" }
      ]
    },
    {
      title: "Panier De Fruits",
      icon: "🍓",
      items: [
        { name: "Tartelette Briochée", price: "4,90 €" },
        { name: "Tartelette Feuilletée", price: "6,90 €" }
      ]
    },
    {
      title: "Tendance",
      icon: "✨",
      items: [
        { name: "Donuts", price: "4,50 €" },
        { name: "Beignets Fourrés", price: "4,90 €" },
        { name: "Muffins", price: "4,90 €" },
        { name: "Part De Cake", price: "4,90 €" }
      ]
    },
    {
      title: "Charlotte Individuelle",
      icon: "🎂",
      items: [
        { name: "Charlotte", price: "6,90 €", description: "Biscuit cuillère, mousse fondante, crème légère, fruits frais ou fruits à coque selon parfum" }
      ]
    },
    {
      title: "Table Partagée",
      icon: "🤝",
      items: [
        { name: "Brioche Cube", price: "6,90 €", description: "Brioche cube garnie à partager à 2 personnes autour d'une boisson" },
        { name: "Rustique Fruits Confits", price: "18,90 €" },
        { name: "Feuilletée Fruits Frais", price: "24,90 €" }
      ]
    }
  ]

  return (
    <section className="menu" id="menu" style={{ backgroundPositionY: `${parallaxOffset}px` }}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
        >
          Notre Carte
        </motion.h2>

        <motion.p 
          className="menu-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Des créations artisanales faites avec amour chaque jour
        </motion.p>

        <div className="menu-grid">
          {menuCategories.map((category, catIndex) => (
            <motion.div 
              className="menu-category"
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              
              <div className="menu-items">
                {category.items.map((item, itemIndex) => (
                  <div className="menu-item" key={itemIndex}>
                    <div className="item-info">
                      <span className="item-name">{item.name}</span>
                      {item.description && (
                        <p className="item-description">{item.description}</p>
                      )}
                    </div>
                    <span className="item-price">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="menu-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>🌿 Produits frais • Fait maison • Sans conservateurs</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Menu
