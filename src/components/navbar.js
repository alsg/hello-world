import PropTypes from "prop-types"
import React from "react"

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-menu">
      <div className="navbar-start" style={{ alignItems: `center` }}>
        <a class="navbar-item name" href="/">
          <div id="title-one" class="navbar-item name">
            Angelica
          </div>

          <div id="title-two" class="navbar-item name">
            Gonzales
          </div>
        </a>

        <div style={{ display: `flex`, marginLeft: `20px` }}>
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

      <div className="navbar-end">{/* TODO: add searchbar */}</div>
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
