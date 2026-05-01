// @ts-check

import styles from './CartIcon.module.scss'
import ShoppingIcon from '../../assets/shopping-icon.png'
import { useContext } from 'react'
import { CartContext } from '../../context'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } =
    useContext(CartContext)

  /**
   * Maneja el clic en el contenedor del carrito.
   *
   * @typedef {Function}
   * @param {import('react').MouseEvent<HTMLDivElement>} e Evento
   * @returns {void} No devuelve nada
   */
  const isOpenCartToggle = e => {
    e.stopPropagation()
    setIsCartOpen(!isCartOpen)
  }

  return (
    <div
      className={styles.shoppingBox}
      onClick={isOpenCartToggle}>
      <img
        src={ShoppingIcon}
        className={styles.ShoppingIcon}
      />
      <span className={styles.articlesLength}>12</span>
    </div>
  )
}

export default CartIcon
