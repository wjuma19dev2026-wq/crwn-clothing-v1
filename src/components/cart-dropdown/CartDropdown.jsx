/** Libraries */
import clxs from 'clsx'

import styles from './CartDropdown.module.scss'

/** Context */
import { useContext } from 'react'
import { CartContext } from '../../context'

/** Components */
import Button from '../button/Button'
import CartItem from '../cart-item'
import { useNavigate } from 'react-router-dom'

const CartDropdown = () => {
  const navigate = useNavigate()

  const onHandlerCheckout = () => {
    console.log('Handler Checkout')
    navigate('/checkout')
  }

  const { isCartOpen, cartItems } = useContext(CartContext)

  return (
    <div
      className={clxs(styles.cardDropdownContainer, {
        [styles.open]: isCartOpen,
      })}>
      <ul
        className={clxs(
          'list-group list-group-flush',
          styles.cartDropdownList,
        )}>
        {cartItems.map((product, i) => (
          <CartItem
            key={i}
            product={product}
          />
        ))}
      </ul>

      <div className={styles.btnCheckout}>
        <Button
          fn={onHandlerCheckout}
          buttonType="button"
          buttonClass={'dark' + ' ' + 'w-100'}>
          Go to checkout
        </Button>
      </div>
    </div>
  )
}

export default CartDropdown
