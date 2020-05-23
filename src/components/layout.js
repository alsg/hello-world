/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { useStaticQuery, graphql } from "gatsby"
import { Navbar, Footer, SocialMediaTemplate } from "../components"

const Layout = ({ children }) => (
  <div>
    <Navbar />

    <div
      class="container"
      style={{
        padding: `0px 40px`,
      }}
    >
      <div
        class="content"
        style={{ padding: `2rem 25rem 1.5rem 0`, textAlign: `justify` }}
      >
        {children}
      </div>

      {/* TODO: add mail subscription (Mailchimp) */}

      <Footer>
        <SocialMediaTemplate />
      </Footer>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
