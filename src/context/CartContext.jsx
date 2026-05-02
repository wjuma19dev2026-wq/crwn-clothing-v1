import _ from 'lodash'
const {
  createContext,
  useState,
  useEffect,
} = require('react')

const CartContext = createContext({
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  carTotal: 0,
})

const addCartItem = (cartItems, productToAdd) => {
  // Find if cartItems constains producToAdd
  const EXISTING_CART_ITEM = _.find(cartItems, {
    id: productToAdd.id,
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

const removeCartItem = (cartItems, productToRemove) => {
  // Find the item to remove
  const EXISTING_CART_ITEM = _.find(cartItems, {
    id: productToRemove.id,
  })

  // If quantity is 1, remove that item from cart
  if (EXISTING_CART_ITEM.quantity === 1) {
    return _.reject(cartItems, {
      id: productToRemove.id,
    })
  }

  // Return back cartitems with matching cart item with reduced quantity
  const decrementQuantityByOne = product => {
    return product.id === EXISTING_CART_ITEM.id
      ? { ...product, quantity: product.quantity - 1 }
      : product
  }
  return _.map(cartItems, decrementQuantityByOne)
}

const clearCartItem = (cartItems, productToClear) => {
  return _.reject(cartItems, {
    id: productToClear.id,
  })
}

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setcartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  const addItemToCart = productToAdd => {
    setcartItems(addCartItem(cartItems, productToAdd))
  }

  const removeItemFromCart = productToRemove => {
    setcartItems(removeCartItem(cartItems, productToRemove))
  }

  const clearItemFromCart = productToClear => {
    setcartItems(clearCartItem(cartItems, productToClear))
  }

  useEffect(() => {
    const newCartCount = _.reduce(
      cartItems,
      (total, cartItem) => total + cartItem.quantity,
      0,
    )
    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = _.reduce(
      cartItems,
      (total, item) => total + item.price * item.quantity,
      0,
    )
    setCartTotal(newCartTotal)
  }, [cartItems])

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
