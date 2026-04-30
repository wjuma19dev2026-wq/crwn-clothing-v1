import styles from './CartIcon.module.scss'
import ShoppingIcon from '../../assets/shopping-icon.png'

const CartIcon = () => {
  return (
    <div className={styles.shoppingBox}>
      <img
        src={ShoppingIcon}
        className={styles.ShoppingIcon}
      />
      <span className={styles.articlesLength}>0</span>
    </div>
  )
}

export default CartIcon
