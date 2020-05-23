import PropTypes from "prop-types"
import React from "react"

const Navbar = () => (
  <nav
    className="navbar"
    style={{ borderBottom: `1px solid black`, padding: `0 135px` }}
  >
    <div className="navbar-menu">
      <div className="navbar-start" style={{ alignItems: `center` }}>
        <a className="navbar-item name" href="/">
          <div id="title-one" className="navbar-item name">
            Angelica
          </div>

          <div id="title-two" className="navbar-item name">
            Gonzales
          </div>
        </a>

        <div style={{ display: `flex`, marginLeft: `20px` }}>
          <a className="navbar-item nav-link" href="/">
            Home
          </a>
          <a className="navbar-item nav-link" href="/blog">
            Blog
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
