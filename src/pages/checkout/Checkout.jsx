import { useContext } from 'react'
import styles from './Checkout.module.scss'
import { CartContext } from '../../context/CartContext'
import CheckoutItem from '../../components/checkout-item'

const Checkout = () => {
  const { cartItems, cartTotal, removeItemFromCart } =
    useContext(CartContext)

  return (
    <main className={styles.container}>
      <h1>Checkout</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th
              scope="col"
              className={styles.productImageColumn}>
              Product
            </th>
            <th scope="col">Description</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <CheckoutItem
              key={item.id}
              cartItem={item}
              removeItemFromCart={removeItemFromCart}
            />
          ))}
        </tbody>
        <tfoot>
          <tr className={styles.totalLabel}>
            <td colSpan="5">
              Total $
              {Intl.NumberFormat({}).format(cartTotal)}
            </td>
          </tr>
        </tfoot>
      </table>
    </main>
  )
}

export default Checkout
