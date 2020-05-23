import React from "react"
import { Layout, Header, AboutMe } from "../components"

import "react-bulma-components/dist/react-bulma-components.min.css"
import "../style/theme.scss"

const IndexPage = () => (
  <div>
    <Layout>
      <Header>A little about me</Header>
      <AboutMe></AboutMe>
    </Layout>
  </div>
)

export default IndexPage
