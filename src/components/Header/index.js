import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {IoMdHome} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'
import {BsBriefcaseFill} from 'react-icons/bs'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="nav-mobile-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <div className="icons-container">
        <Link to="/">
          <button
            type="button"
            className="nav-mobile-icon"
            data-testid="homeButton"
          >
            <IoMdHome aria-label="home" />
          </button>
        </Link>
        <button
          type="button"
          className="nav-mobile-icon"
          data-testid="BriefcaseButton"
        >
          <BsBriefcaseFill aria-label="Briefcase" />
        </button>
        <button
          type="button"
          className="nav-mobile-icon"
          data-testid="logOutButton"
          onClick={onClickLogout}
        >
          <FiLogOut aria-label="Log out" />
        </button>
      </div>
      <div className="desktop-nav-links">
        <a href="/" className="nav-desktop-link">
          Home
        </a>
        <a href="/" className="nav-desktop-link">
          Jobs
        </a>
      </div>
      <button className="log-out-button" type="button" onClick={onClickLogout}>
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
