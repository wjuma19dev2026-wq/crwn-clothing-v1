import './App.css'
import AppRoutes from './AppRoutes'
import { UserProvider } from './context'
const App = () => (
  <UserProvider>
    <AppRoutes />
  </UserProvider>
)
export default App
