import React, { Children } from "react"
import { NavbarItem, NavbarBurger } from ".."

export default class Navbar extends React.Component {
  state = {
    activeMenu: false,
  }
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    })
  }
  render() {
    return (
      <nav
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
        style={{ borderBottom: `1px solid black` }}
      >
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item name" href="/">
              <div id="title-one" className="name">
                Angelica
              </div>

              <div id="title-two" className="name">
                Gonzales
              </div>
            </a>

            <NavbarBurger
              active={this.state.activeMenu}
              toggleMenu={this.toggleMenu}
            />
          </div>
          <div
            className={`navbar-menu ${
              this.state.activeMenu ? "is-active" : ""
            }`}
          >
            <div
              className="navbar-start"
              style={{ alignItems: `center`, marginLeft: `20px` }}
            >
              <NavbarItem page="/" pageName="Home" />
              <NavbarItem page="/blog" pageName="Blog" />
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
