import { useContext } from 'react'
import styles from './Checkout.module.scss'
import { CartContext } from '../../context/CartContext'

const Checkout = () => {
  const { cartItems, removeItemFromCart } =
    useContext(CartContext)

  return (
    <main className={styles.container}>
      <h1>Vista Checkout</h1>
      <div className={styles.cartItems}>
        {cartItems.map(cartItem => (
          <div
            key={cartItem.id}
            className={styles.cartItem}>
            <span>{cartItem.name}</span>
            <span>Quantity: {cartItem.quantity}</span>
            {/* buttons for incrementing and decrementing quantity can be added here */}
            <div className="gap-2 d-flex">
              <button className="btn btn-primary">+</button>
              <button
                className="btn btn-danger"
                onClick={() =>
                  removeItemFromCart(cartItem)
                }>
                -
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Checkout
