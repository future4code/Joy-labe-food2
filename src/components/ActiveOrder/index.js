import React, { useContext } from "react"
import { GlobalState } from "../../GlobalState/GlobalState"
import clock from "../../assets/images/clock.png"
import { Container, ContainerActiveOrder, ContainerImg, ImgClock, Pedido, SubTotal } from "./style"
export const ActiveOrder = () => {
  const { activeOrder, getActiveOrder } = useContext(GlobalState)
  getActiveOrder()
  return (
    <div>
      {activeOrder.order && (
        <ContainerActiveOrder>
          <Container>
            <ContainerImg>
            <ImgClock src={clock} alt="relógio" />
            </ContainerImg>
            <div>
              <Pedido id={"title"}>Pedido em andamento</Pedido>
              <p>{activeOrder.order.restaurantName}</p>
              <SubTotal id={"price"}>
                SUBTOTAL: R$ {activeOrder.order.totalPrice.toFixed(2)}
              </SubTotal>
            </div>
          </Container>
        </ContainerActiveOrder>
      )}
    </div>
  )
}
