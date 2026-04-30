import './App.css'
import AppRoutes from './AppRoutes'
import { UserProvider, ProductProvider } from './context'
const App = () => (
  <UserProvider>
    <ProductProvider>
      <AppRoutes />
    </ProductProvider>
  </UserProvider>
)
export default App
