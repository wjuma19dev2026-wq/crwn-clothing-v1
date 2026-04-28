import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className="navbar bg-light navbar-light">
      <div className="container">
        <NavLink
          className="navbar-brand"
          to="/">
          Wbay
        </NavLink>
        <div className="">
          <ul className="navbar-nav me-auto d-flex flex-row gap-3">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/shop">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/auth">
                Salir
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
