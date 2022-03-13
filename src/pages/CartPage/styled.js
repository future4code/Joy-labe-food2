import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../constants/colors";

export const Container = styled.div`
  margin: 60px 0;
  font-family: "Roboto";
`;
export const AdressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #eee;
  padding: 1rem 1rem;
`;
export const AdressTitle = styled.p`
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: ${secondaryColor};
`;
export const CartEmpty = styled.p`
  text-align: center;
`;
export const Path = styled.div`
  height: 0.03rem;
  margin-bottom: 1rem;
  border: solid 1px black;
`;
export const CartDetails = styled.div`
  padding: 1rem 1rem;
`;
export const StyledButton = styled.button`
  width: 20.5rem;
  height: 2.625rem;
  padding: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 2px;
  background-color: ${primaryColor};
  cursor: pointer;
  margin: 10px 0;
`;
export const RestaurantDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.3rem 1rem 0.3rem 1rem;
  height: auto;
  h3 {
    margin: 0;
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: ${primaryColor};
  }
  p {
    margin: 0;
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: ${secondaryColor};
  }
`;
