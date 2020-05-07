import React from "react"

const Footer = ({ children }) => (
  <footer class="has-text-centered">
    {children}

    <div>
      © {new Date().getFullYear()},{` A.G.`}
    </div>
  </footer>
)

export default Footer
