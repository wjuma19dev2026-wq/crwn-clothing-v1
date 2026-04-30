import styles from './CartDropdown.module.scss'

const CartDropdown = () => {
  return (
    <div className={styles.cardDropdownContainer}>
      <button
        className={styles.btnCheckout + ' btn btn-dark'}>
        Go to checkout
      </button>
    </div>
  )
}

export default CartDropdown
