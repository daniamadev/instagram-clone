import React from "react"

import TopInfo from "../TopInfo"
import Logo from "../../images/logo-instagram.png"

export default function Header() {
  return (
    <div className="header">
      <header>
        <img src={Logo} alt="Logo Instagram" />
        <TopInfo />
      </header>
    </div>
  )
}
