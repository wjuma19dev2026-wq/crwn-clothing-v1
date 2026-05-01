import { useContext } from 'react'
import Button from '../button/Button'
import styles from './CartDropdown.module.scss'
import { CartContext } from '../../context'

const CartDropdown = () => {
  const onHandlerCheckout = () => {
    console.log('Handler Checkout')
  }

  const { isCartOpen } = useContext(CartContext)

  return (
    <div
      className={
        styles.cardDropdownContainer +
        ' ' +
        `${isCartOpen ? styles.open : ''}`
      }>
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
