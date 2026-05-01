import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'
import { useContext } from 'react'
import { CartContext, UserContext } from '../../context'
import { signOutSvs } from '../../services'
import CartIcon from '../../components/cart-icon'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'

const Navbar = () => {
  const { currentUser } = useContext(UserContext)

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
                className="nav-link text-uppercase"
                to="/shop">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              {currentUser ? (
                <a
                  onClick={signOutSvs}
                  className={`${styles.navLink} nav-link text-uppercase`}>
                  Logout
                </a>
              ) : (
                <NavLink
                  className="nav-link text-uppercase"
                  to="/auth">
                  Sign in
                </NavLink>
              )}
            </li>
            <CartIcon />
          </ul>
          <CartDropdown />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
