const { createContext, useState } = require('react')

const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
})

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const value = {
    isCartOpen,
    setIsCartOpen,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
