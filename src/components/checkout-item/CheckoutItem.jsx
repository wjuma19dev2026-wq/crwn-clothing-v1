import { useContext } from 'react'
import styles from './CheckoutItem.module.scss'
import { CartContext } from '../../context/CartContext'

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem

  const {
    removeItemFromCart,
    addItemToCart,
    clearItemFromCart,
  } = useContext(CartContext)

  const handlerRemoveItemFromCart = () =>
    removeItemFromCart(cartItem)
  const handlerAddItemToCart = () => addItemToCart(cartItem)
  const handlerClearItemFromCart = () =>
    clearItemFromCart(cartItem)

  return (
    <tr>
      <th scope="row">
        <img
          className={styles.imageUrl}
          src={imageUrl}
          alt={name}
        />
      </th>
      <td>{name}</td>
      <td>
        <a
          className="px-3"
          onClick={handlerRemoveItemFromCart}>
          {/* &#10094; */}
          <i class="bi bi-caret-left-fill"></i>
        </a>
        <span>{quantity}</span>
        <a
          className="px-3"
          onClick={handlerAddItemToCart}>
          {/* &#10095; */}
          <i class="bi bi-caret-right-fill"></i>
        </a>
      </td>
      <td>{price}</td>
      <td>
        <a
          className="px-4"
          onClick={handlerClearItemFromCart}>
          {/* &#10005; */}
          <i class="bi bi-x-circle-fill"></i>
        </a>
      </td>
    </tr>
  )
}

export default CheckoutItem
