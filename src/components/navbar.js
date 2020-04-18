import PropTypes from "prop-types"
import React from "react"

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-menu">
      <div className="navbar-start"></div>
      <div className="navbar-end">
        <a class="navbar-item nav-link" href="/">
          Home
        </a>
        <a class="navbar-item nav-link" href="/">
          About Me
        </a>
        <a class="navbar-item nav-link" href="/">
          Portfolio
        </a>
        <a class="navbar-item nav-link" href="/">
          Write Ups
        </a>
      </div>
    </div>
  </nav>
)

Navbar.propTypes = {
  routes: PropTypes.array,
}

Navbar.defaultProps = {
  routes: [],
}

export default Navbar
