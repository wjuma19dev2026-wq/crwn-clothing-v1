import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'
import { useContext } from 'react'
import { UserContext } from '../../context'
import { signOutSvs } from '../../services'

const Navbar = () => {
  const { currentUser } = useContext(UserContext)

  return (
    <nav className="navbar bg-primary navbar-dark">
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
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
