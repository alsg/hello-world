/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Navbar, Footer, SocialMediaTemplate } from "../components"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => (
  <div className="container is-fluid">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Angelica Gonzales</title>
      <link rel="canonical" href="https://alsg.me" />
    </Helmet>

    <Navbar />

    <section className="section" style={{ paddingTop: `5rem` }}>
      <div className="container">
        <div>
          <div className="columns is-desktop">
            <div className="column is-two-thirds">{children}</div>
          </div>
        </div>

        {/* TODO: add mail subscription (Mailchimp) */}

        <Footer>
          <SocialMediaTemplate />
        </Footer>
      </div>
    </section>
  </div>
)

export default Layout
