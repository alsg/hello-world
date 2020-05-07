import React from "react"

import { Layout, Navbar, Footer, SocialMediaTemplate } from "../components"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "react-bulma-components/dist/react-bulma-components.min.css"
import "../style/theme.scss"

library.add(fab, faLinkedin)

const IndexPage = () => (
  <div
    class="container"
    style={{
      padding: `0px 40px`,
    }}
  >
    <Navbar />

    <div class="content"></div>

    <Footer>
      <SocialMediaTemplate />
    </Footer>
  </div>
)

export default IndexPage
