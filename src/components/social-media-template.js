import React from "react"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const SocialMediaStyle = styled.a`
  margin: 0 5px;
`

const SocialMediaTemplate = () => {
  return (
    <div>
      <SocialMediaStyle href="https://www.linkedin.com/in/alsg/">
        {" "}
        <FontAwesomeIcon size="2x" icon={faLinkedin}></FontAwesomeIcon>
      </SocialMediaStyle>

      <SocialMediaStyle href="https://github.com/alsg">
        {" "}
        <FontAwesomeIcon size="2x" icon={faGithub}></FontAwesomeIcon>
      </SocialMediaStyle>

      <SocialMediaStyle href="https://www.instagram.com/alsg0403/">
        {" "}
        <FontAwesomeIcon size="2x" icon={faInstagram}></FontAwesomeIcon>
      </SocialMediaStyle>

      <SocialMediaStyle href="https://twitter.com/alsg0403">
        {" "}
        <FontAwesomeIcon size="2x" icon={faYoutube}></FontAwesomeIcon>
      </SocialMediaStyle>

      <SocialMediaStyle href="https://twitter.com/alsg0403">
        {" "}
        <FontAwesomeIcon size="2x" icon={faTwitter}></FontAwesomeIcon>
      </SocialMediaStyle>

      <SocialMediaStyle href="https://mail.google.com/mail/?view=cm&fs=1&to=alsg0403@gmail.com&su=Let's%20chat!!&body=Hi%20Angelica%2C%0D%0A%0D%0AI%20look%20forward%20to%20hearing%20from%20you%21%0D%0A%0D%0AWith%20warm%20regards%2C%0D%0A%3CinsertName%3E%0D%0A%3Ccontact%20details%3E">
        {""}
        <FontAwesomeIcon size="2x" icon={faEnvelope}></FontAwesomeIcon>
      </SocialMediaStyle>
    </div>
  )
}

export default SocialMediaTemplate
