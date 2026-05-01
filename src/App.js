import './App.css'
import AppRoutes from './AppRoutes'
import {
  UserProvider,
  ProductProvider,
  CartProvider,
} from './context'
const App = () => (
  <UserProvider>
    <ProductProvider>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </ProductProvider>
  </UserProvider>
)
export default App
