import { createContext, useState } from 'react'
import PRODUCTS from '../shop-data.json'
import { addCollectionAndDocuments } from '../services'
import { SHOP_DATA } from '../shop-data'

const ProductContext = createContext({
  products: [],
})

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS)
  const value = { products }

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}

export { ProductContext, ProductProvider }
