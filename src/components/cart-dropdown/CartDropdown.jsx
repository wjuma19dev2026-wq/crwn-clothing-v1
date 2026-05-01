/** Libraries */
import clxs from 'clsx'

import styles from './CartDropdown.module.scss'

/** Context */
import { useContext } from 'react'
import { CartContext } from '../../context'

/** Components */
import Button from '../button/Button'

const CartDropdown = () => {
  const onHandlerCheckout = () => {
    console.log('Handler Checkout')
  }

  const { isCartOpen } = useContext(CartContext)

  return (
    <div
      className={clxs(styles.cardDropdownContainer, {
        [styles.open]: isCartOpen,
      })}>
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
