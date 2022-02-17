import React from "react"
import { Container, ContainerDetails } from "./styled"
import Restaurant from "../../assets/images/restaurant.png"

const RestaurantCard = () => {
  return (
    <Container>
      <img src={Restaurant} alt="restaurante" />
      <span>Restaurante</span>
      <ContainerDetails>
        <span>50 - 60 min</span>
        <span className="frete">Frete R$6,00</span>
      </ContainerDetails>
    </Container>
  )
}

export default RestaurantCard
