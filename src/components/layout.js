/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

import Header from "./header"

const SocialMediaStyle = styled.div`
  display: grid;
  grid-template-columns: 25px 25px 25px;
  grid-template-rows: auto;
  grid-template-areas:
    "sm1 sm2 sm3"
    "desc desc desc";
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div
        class="container"
        style={{
          padding: `0px 40px`,
        }}
      >
        <main>{children}</main>

        <footer class="has-text-centered">
          <div>
            <a href="https://www.linkedin.com/in/angelica-g/">
              {" "}
              <FontAwesomeIcon
                size="2x"
                icon={["fab", "linkedin"]}
              ></FontAwesomeIcon>
            </a>
            <a href="https://github.com/alsg">
              {" "}
              <FontAwesomeIcon
                size="2x"
                icon={["fab", "github"]}
              ></FontAwesomeIcon>
            </a>
            <a href="https://www.goodreads.com/alsg">
              {" "}
              <FontAwesomeIcon
                size="2x"
                icon={["fab", "goodreads"]}
              ></FontAwesomeIcon>
            </a>
          </div>
          © {new Date().getFullYear()},{` A.G.`}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
