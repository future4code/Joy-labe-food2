import React, { useEffect } from "react"
import { InitialContainer, LogoContainer } from "./styled"
import Logo from "../../assets/images/logo-future-eats@2x.png"

const InitialPage = () => {
  useEffect(() => {}, [])
  return (
    <InitialContainer>
      <LogoContainer src={Logo} alt="Logo iFuture" />
    </InitialContainer>
  )
}

export default InitialPage
