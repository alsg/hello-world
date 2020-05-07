import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

const SocialMediaStyle = styled.a`
  margin: 0 5px;
`

const SocialMediaTemplate = () => {
  return (
    <div>
      <SocialMediaStyle href="https://www.linkedin.com/in/angelica-g/">
        {" "}
        <FontAwesomeIcon size="2x" icon={["fab", "linkedin"]}></FontAwesomeIcon>
      </SocialMediaStyle>

      <SocialMediaStyle href="https://github.com/alsg">
        {" "}
        <FontAwesomeIcon size="2x" icon={["fab", "github"]}></FontAwesomeIcon>
      </SocialMediaStyle>
    </div>
  )
}

export default SocialMediaTemplate
