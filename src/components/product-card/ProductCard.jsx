// @ts-check

import { useContext } from 'react'
import Button from '../button/Button'
import styles from './ProductCard.module.scss'
import { CartContext } from '../../context/CartContext'

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product
  const { addItemToCart } = useContext(CartContext)

  /**
   * Agrega un producto al carrito de compras
   * @param {import('react').MouseEvent<HTMLDivElement>} e Event
   * @returns {void} No devuelve nada
   */
  const onAddToCart = e => {
    e.stopPropagation()
    addItemToCart(product)
  }

  return (
    <div className={`card ${styles.productCard}`}>
      <div className={styles.cardHeader}>
        <img
          className={styles.imageUrl}
          src="https://i.ebayimg.com/images/g/dUMAAOSwmZpmmrFi/s-l1600.webp"
          alt={name}
        />
        <div className={styles.overlay}>
          <Button
            fn={onAddToCart}
            buttonType="button"
            buttonClass={'dark'}>
            <i className="bi bi-cart text-light mx-1"></i>
            Add to cart
          </Button>
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
