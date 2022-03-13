import styled from "styled-components"
import { primaryColor } from "../../constants/colors"

export const ContainerActiveOrder = styled.div`
  background-color: ${primaryColor};
  font-family: "Roboto" ;
  height: auto;
  width: 100vw ;
  padding: 1rem;
  z-index: 100;
  position: fixed;
  bottom: 54px;
  float: center;
`

export const ImgClock = styled.img`
  width: 2rem;
  height: 2rem;
`

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

export const ContainerImg = styled.div`
  margin: 0 1.5rem;
`

export const Pedido = styled.p`
  color: white;
  margin: 0;
`

export const SubTotal = styled.p`
  font-weight: bold;
  margin: 0;
`
