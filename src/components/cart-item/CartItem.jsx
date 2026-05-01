import styles from './CartItem.module.scss'

const CartItem = ({ product }) => {
  const { name, imageUrl, price, quantity } = product

  return (
    <li className="list-group-item d-flex align-items-center mb-1">
      <img
        src={imageUrl}
        alt={name}
      />
      <div className="d-flex flex-column align-items-center w-100">
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>
          {quantity} x ${price}
        </span>
      </div>
    </li>
  )
}

export default CartItem
