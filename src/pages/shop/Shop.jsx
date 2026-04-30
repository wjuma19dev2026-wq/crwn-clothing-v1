import styles from './Shop.module.scss'
import SHOP_DATA from '../../shop-data.json'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'

const Shop = () => {
  const { products } = useContext(ProductContext)

  return (
    <main className="container">
      <div className="row">
        {products.map(product => (
          <div
            key={product.id}
            className="col-12">
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Shop
