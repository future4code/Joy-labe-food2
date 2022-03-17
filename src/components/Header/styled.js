import styled from "styled-components";
import { borderColor } from "../../constants/colors";

export const ContainerHeader = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  align-items: center;
  justify-items: center;
  text-align: center;
  border-bottom: 1px solid ${borderColor};
  margin-bottom: 8px;
  z-index: 1;
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  font-family:  "Roboto";
  p {
    align-self: center;
  }
  
  img {
    width: 36px;
    height: 36px;
    object-fit: contain;
  }
`;

export const Div = styled.div`
  padding: 0.35em;
`
