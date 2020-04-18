import React from "react"

import { Layout, Navbar } from "../components"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "react-bulma-components/dist/react-bulma-components.min.css"
import "../style/theme.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMugHot } from "@fortawesome/free-solid-svg-icons"

library.add(fab, faLinkedin)

const IndexPage = () => (
  <Layout>
    <Navbar />

    <div class="content">
      <div>
        <div id="title-one" class="name">
          Angelica
        </div>

        <div id="title-two" class="name">
          Gonzales
        </div>
      </div>

      <div style={{ textAlign: `center` }}>
        <FontAwesomeIcon
          size="10x"
          icon={faMugHot}
          style={{ color: `#aeaeae` }}
        ></FontAwesomeIcon>

        <div>Content is still brewing...</div>
        {/* <div id="tagline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
          ante aliquam diam blandit viverra non nec mauris. Mauris vel enim nec
          ipsum malesuada bibendum. Donec velit lacus, feugiat varius ipsum ut,
          sollicitudin ultrices elit. Suspendisse non lacinia enim. Etiam
          sagittis metus et nisi hendrerit ultrices. Sed nisl eros, dictum in
          tempor placerat, lacinia non leo. Sed eleifend viverra neque eu porta.
          Nam sed risus odio.
        </div>
        <br></br>
        <div>
          In varius elit eu leo rutrum porta. Cras facilisis lectus vel massa
          fermentum porta. Morbi commodo auctor eros, id consequat enim
          condimentum ut. Etiam gravida ipsum nibh, quis finibus tortor commodo
          a. Praesent pharetra quis tellus scelerisque pharetra. Nulla malesuada
          sapien ligula, sed luctus sapien ultrices at. Ut dignissim ipsum ac
          velit malesuada dictum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Curabitur vestibulum est ex, ac mattis turpis
          ullamcorper ut. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia Curae; Duis iaculis erat mi, non convallis
          nulla varius eget. Donec rutrum cursus nisl et imperdiet. Phasellus
          sed mattis nibh.
        </div>
        <br></br>
        <div>
          In varius elit eu leo rutrum porta. Cras facilisis lectus vel massa
          fermentum porta. Morbi commodo auctor eros, id consequat enim
          condimentum ut. Etiam gravida ipsum nibh, quis finibus tortor commodo
          a. Praesent pharetra quis tellus scelerisque pharetra. Nulla malesuada
          sapien ligula, sed luctus sapien ultrices at. Ut dignissim ipsum ac
          velit malesuada dictum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Curabitur vestibulum est ex, ac mattis turpis
          ullamcorper ut. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia Curae; Duis iaculis erat mi, non convallis
          nulla varius eget. Donec rutrum cursus nisl et imperdiet. Phasellus
          sed mattis nibh.
        </div>
        <br></br>
        <div>
          In varius elit eu leo rutrum porta. Cras facilisis lectus vel massa
          fermentum porta. Morbi commodo auctor eros, id consequat enim
          condimentum ut. Etiam gravida ipsum nibh, quis finibus tortor commodo
          a. Praesent pharetra quis tellus scelerisque pharetra. Nulla malesuada
          sapien ligula, sed luctus sapien ultrices at. Ut dignissim ipsum ac
          velit malesuada dictum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Curabitur vestibulum est ex, ac mattis turpis
          ullamcorper ut. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia Curae; Duis iaculis erat mi, non convallis
          nulla varius eget. Donec rutrum cursus nisl et imperdiet. Phasellus
          sed mattis nibh.
        </div> */}
      </div>
    </div>
  </Layout>
)

export default IndexPage
