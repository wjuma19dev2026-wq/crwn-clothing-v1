import './App.css'
import AppRoutes from './AppRoutes'
import {
  UserProvider,
  CategoryMapProvider,
  CartProvider,
} from './context'
const App = () => (
  <UserProvider>
    <CategoryMapProvider>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </CategoryMapProvider>
  </UserProvider>
)
export default App
