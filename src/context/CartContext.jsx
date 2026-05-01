import _ from 'lodash'
const {
  createContext,
  useState,
  useEffect,
} = require('react')

const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
})

const addCartItem = (cartItems, productToAdd) => {
  // Find if cartItems constains producToAdd
  const EXISTING_CART_ITEM = _.find(cartItems, {
    ['id']: productToAdd.id,
  })

  // If found, increment quantity
  const incrementQuantityByOne = product => {
    return product.id === EXISTING_CART_ITEM.id
      ? { ...product, quantity: product.quantity + 1 }
      : product
  }
  if (EXISTING_CART_ITEM) {
    return _.map(cartItems, incrementQuantityByOne)
  }

  // Return array all products and productToAdd quantityt +1
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setcartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)

  const addItemToCart = productToAdd => {
    setcartItems(addCartItem(cartItems, productToAdd))
  }

  useEffect(() => {
    const newCartCount = _.reduce(
      cartItems,
      (total, cartItem) => total + cartItem.quantity,
      0,
    )
    setCartCount(newCartCount)
  }, [cartItems])

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
