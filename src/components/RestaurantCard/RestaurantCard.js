import React from "react"
import { useNavigate } from "react-router-dom"
import { goToRestaurantPage } from "../../routes/coordinator"
import { Container, ContainerDetails, ShippingText } from "./styled"

const RestaurantCard = ({ restaurant }) => {
  const navigate = useNavigate()

  return (
    <Container onClick={() => goToRestaurantPage(navigate, restaurant.id)}>
      <img src={restaurant.logoUrl} alt="Logo Restaurante" />
      <span>{restaurant.name}</span>
      <ContainerDetails>
        <span>
          {Math.floor(restaurant.deliveryTime * 0.9)} -{" "}
          {restaurant.deliveryTime} min
        </span>
        <ShippingText>
          Frete R$
          {Number(restaurant.shipping).toFixed(2)}
        </ShippingText>
      </ContainerDetails>
    </Container>
  )
}

export default RestaurantCard
