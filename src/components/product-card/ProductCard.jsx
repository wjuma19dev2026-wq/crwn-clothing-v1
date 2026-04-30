import Button from '../button/Button'
import styles from './ProductCard.module.scss'

const ProductCard = ({ name, imageUrl, price }) => {
  return (
    <div className={`card ${styles.productCard}`}>
      <div className={styles.cardHeader}>
        <img
          className={styles.imageUrl}
          src="https://i.ebayimg.com/images/g/dUMAAOSwmZpmmrFi/s-l1600.webp"
          alt={name}
        />
        <div className={styles.overlay}>
          <button className="btn btn-dark mb-4">
            <i className="bi bi-cart text-light mx-1"></i>
            Add to cart
          </button>
        </div>
      </div>
      <div className="card-body d-flex justify-content-between">
        <p className="card-title m-0">{name}</p>
        <p className="m-0">{price}</p>
      </div>
    </div>
  )
}

export default ProductCard
