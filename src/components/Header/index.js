// Write your JS code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    // const headerForSmallDevices = () => (
    //   <ul className="navbar-container-sm">
    //     <li className="logo-container">
    //       <img
    //         src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
    //         alt="website logo"
    //         className="website-logo-sm"
    //       />
    //       <button type="button" className="logout-button-container">
    //         <img
    //           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png "
    //           alt="nav logout"
    //           className="nav-logout-button"
    //         />
    //       </button>
    //     </li>
    //     <li className="menu-items-container-sm">
    //       <li>
    //         <img
    //           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
    //           className="menu-item"
    //           alt="nav home"
    //         />
    //       </li>
    //       <li>
    //         <img
    //           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
    //           className="menu-item"
    //           alt="nav products"
    //         />
    //       </li>
    //       <li>
    //         <img
    //           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
    //           className="menu-item"
    //           alt="nav cart"
    //         />
    //       </li>
    //     </li>
    //   </ul>
    // )

    // const headerForLargeDevices = () => (
    //   <ul className="navbar-container-lg">
    //     <li className="navbar-website-logo-container">
    //       <img
    //         src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
    //         alt="website logo"
    //         className="navbar-website-logo"
    //       />
    //     </li>
    //     <ul className="menu-container">
    //       <li className="menu-item"> Home </li>
    //       <li className="menu-item"> Products </li>
    //       <li className="menu-item"> Cart </li>
    //       <li>
    //         <button type="button" className="login-logout-button">
    //           Logout
    //         </button>
    //       </li>
    //     </ul>
    //   </ul>
    // )
    return (
      <div>
        <div className="navbar-container-lg">
          <div className="navbar-website-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="navbar-website-logo"
            />
          </div>
          <ul className="menu-container">
            <Link to="/home" className="link-item">
              <li className="menu-item"> Home </li>
            </Link>
            <Link to="/products" className="link-item">
              <li className="menu-item"> Products </li>
            </Link>
            <Link to="/cart" className="link-item">
              <li className="menu-item"> Cart </li>
            </Link>
            <li>
              <button type="button" className="login-logout-button">
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div className="navbar-container-sm">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo-sm"
            />

            <button type="button" className="logout-button-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png "
                alt="nav logout"
                className="nav-logout-button"
              />
            </button>
          </div>
          <ul className="menu-items-container-sm">
            <li>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                className="menu-item"
                alt="nav home"
              />
            </li>
            <li>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                className="menu-item"
                alt="nav products"
              />
            </li>
            <li>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                className="menu-item"
                alt="nav cart"
              />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
