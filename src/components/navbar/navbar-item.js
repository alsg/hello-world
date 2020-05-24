import React from "react"

const NavbarItem = (props) => (
  <a className="navbar-item nav-link" href={props.page}>
    {props.pageName}
  </a>
)

export default NavbarItem
