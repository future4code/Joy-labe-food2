import React from 'react'
import { InitialContainer, LogoContainer, ImgElarge } from './styled'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/images/logo-future-eats@2x.png'

const InitialPage = () => {
  const navigate = useNavigate()

  setTimeout(() => {
    navigate('/login')
  }, 2000)

  return (
    <ImgElarge>
      <InitialContainer>
        <LogoContainer src={Logo} alt="Logo iFuture" />
      </InitialContainer>
    </ImgElarge>
  )
}

export default InitialPage
