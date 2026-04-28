import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

// Shared
import Navigation from './shared/navigation'

// Pages
import Authentication from './pages/authentication'
import Home from './pages/home/home.component'
import Shop from './pages/shop'

const AppRoutes = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}>
      <Routes>
        {/* Ruta inicial sugerida */}
        <Route
          path="/"
          element={<Navigation />}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path="shop"
            element={<Shop />}
          />
          <Route
            path="auth"
            element={<Authentication />}
          />
        </Route>
        {/* Ruta de redirección o 404  */}
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
