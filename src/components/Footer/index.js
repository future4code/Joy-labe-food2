import React from "react"
import { useNavigate } from "react-router-dom"
import { FooterFlex, FooterDiv } from "./style"
import homeRed from "../../assets/images/homepage.png"
import homeGrey from "../../assets/images/homepagegray.png"
import cartRed from "../../assets/images/shopping-cart-red1.png"
import cartGrey from "../../assets/images/shopping-cart.png"
import avatarRed from "../../assets/images/avatar-red.png"
import avatarGrey from "../../assets/images/avatar.png"
import {
  goToCartPage,
  goToHomePage,
  goToProfilePage,
} from "../../routes/coordinator"
const Footer = () => {
  const navigate = useNavigate()

  return (
    <FooterDiv>
      <FooterFlex>
        <img
          src={
            window.location.pathname === "/pagina-inicial" ? homeRed : homeGrey
          }
          alt="Home Icon"
          onClick={() => goToHomePage(navigate)}
        />
        <img
          src={window.location.pathname === "/carrinho" ? cartRed : cartGrey}
          alt="Cart Icon"
          onClick={() => goToCartPage(navigate)}
        />
        <img
          src={window.location.pathname === "/perfil" ? avatarRed : avatarGrey}
          alt="Avatar Icon"
          onClick={() => goToProfilePage(navigate)}
        />
      </FooterFlex>
    </FooterDiv>
  )
}

export default Footer
