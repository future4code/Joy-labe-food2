import styled from "styled-components"
import {
  borderColor,
  primaryColor,
  secondaryColor,
} from "../../constants/colors"

export const Container = styled.div`
  width: 20.5rem;
  height: 11.75rem;
  padding: 0 0 1rem;
  margin-top: 0.5rem;
  border-radius: 8px;
  border: solid 1px ${borderColor};

  img {
    width: 20.5rem;
    height: 7.5rem;
    margin: 0 0 0.75rem;
    object-fit: contain;
  }

  span {
    width: 18.5rem;
    height: 1.125rem;
    margin: 0.75rem 1rem 0.25rem;
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: ${primaryColor};
  }
`

export const ContainerDetails = styled.div`
  display: flex;

  span {
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: ${secondaryColor};
  }

  .frete {
    text-align: end;
  }
`
