import React from "react"

const NavbarBurger = (props) => (
  <div
    onClick={props.toggleMenu}
    className={`navbar-burger burger ${props.active ? "is-active" : ""}`}
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </div>
)

export default NavbarBurger
