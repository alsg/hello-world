import React from "react"

import { Layout, Header } from "../components"

const NotFoundPage = () => (
  <Layout>
    <Header>Page not found</Header>

    <div className="main-text">
      <p style={{ marginBottom: `25px` }}>
        Uh oh! Looks like this page doesn't exist.
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
