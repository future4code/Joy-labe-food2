import { TextField } from "@mui/material"
import styled from "styled-components"
import { neutralColor, primaryColor} from "../../constants/colors"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 60px;
`

export const StyledTextField = styled(TextField)`
  width: 20.5rem;
  height: 3.5rem;
  padding: 1rem 0.503rem 1rem 1.063rem;
  border-radius: 2px;
`

export const ContainerCatetories = styled.div`
  width: 22.5rem;
  height: 2.625rem;
  margin: 0.5rem 0 0;
  padding: 0.75rem 0 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  overflow: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
    width: 0;
    background: transparent;
  }
`

export const CategoryWrapper = styled.div`
  display: flex;

  span {
    width: 5.438rem;
    height: 1.125rem;
    margin: 0 0.5rem 0 0;
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: ${({color}) => color === "primary" ? primaryColor : neutralColor};
  }
`
