import styled from "styled-components"
import { secondaryColor } from "../../constants/colors"

export const Container = styled.div`
  margin: 60px 0;
`
export const AdressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #eee;
  padding: 1rem 1rem;
  font-family: "Roboto";
`
export const AdressTitle = styled.p`
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: ${secondaryColor};
`
export const CartEmpty=styled.p`
text-align: center;
font-family: Roboto;
`