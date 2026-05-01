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
        <button
          className="btn btn-light"
          onClick={handlerRemoveItemFromCart}>
          <i class="bi bi-caret-left-fill"></i>
        </button>
        <span className="mx-2">{quantity}</span>
        <button
          className="btn btn-light"
          onClick={handlerAddItemToCart}>
          <i class="bi bi-caret-right-fill"></i>
        </button>
      </td>
      <td>{price}</td>
      <td>
        <button
          className="btn btn-light"
          onClick={handlerClearItemFromCart}>
          &#10005;
        </button>
      </td>
    </tr>
  )
}

export default CheckoutItem
