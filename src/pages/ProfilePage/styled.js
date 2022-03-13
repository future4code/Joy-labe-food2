import styled from "styled-components"
import { primaryColor, secondaryColor } from "../../constants/colors"

export const Container = styled.div`
  margin: 60px 0;
  font-family: "Roboto";
`

export const ProfileDetails = styled.div`
  margin: 64px 0 80px 0;
`

export const DatesDiv = styled.div`
  margin-right: 1rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const UserName = styled.span`
  height: auto;
  margin: 1rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`
export const AddressDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #eee;
  padding: 1rem 1rem;

  div {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  p {
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
  }
`
export const AddressTitle = styled.span`
  font-family: "Roboto";
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: ${secondaryColor};
`
export const Email = styled.span`
  width: 20.5rem;
  height: 1.125rem;
  margin: 0.125rem 1rem 0.5rem;
  font-family: "Roboto";
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`
export const CPF = styled.div`
  width: 20.5rem;
  height: 1.125rem;
  margin: 0.5rem 1rem 1rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`
export const HistoryTitle = styled.span`
  width: 20.5rem;
  height: 1.125rem;
  margin: 1rem 1rem 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`

export const Path = styled.div`
  height: 0.063rem;
  margin: 0.5rem 1rem 1rem;
  border: solid 1px black;
`
export const HistoryContainer = styled.div`
  margin-top: 1rem;
`
export const HistoryDiv = styled.div`
  text-align: center;
`
export const History = styled.span`
  width: 18.5rem;
  height: 1.125rem;
  opacity: 0.89;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
`

export const Img = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
`
export const ButtonStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem;
`
export const StyledButton = styled.button`
  width: 100%;
  display: block;
  padding: 0.75rem 1rem;
  font-weight: bold;
  border: none;
  border-radius: 2px;
  background-color: ${primaryColor};
  cursor: pointer;
  margin: 10px 0;
`
