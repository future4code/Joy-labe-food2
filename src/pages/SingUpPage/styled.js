import { TextField } from '@mui/material'
import styled from 'styled-components'
import { neutralColor, primaryColor } from '../../constants/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 60px 0;

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}


img {
    width: 6.5rem;
    height: 3.625rem;
    margin: 1.5rem 8rem 1rem;
    object-fit: contain;
}

h1,p {
    width: 18.5rem;
    height: 1.125rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: ${neutralColor};
    padding: 0.75rem 2rem;
}
`
export const StyledTextField = styled(TextField)`
  width: 20.5rem;
  height: 3.5rem;
  margin: 0.5rem 0 0;
  padding: 1.188rem 3rem 1.188rem 1rem;
  border-radius: 2px;
`



export const StyledButton = styled.button`
  width: 20.5rem;
  height: 2.625rem;
  padding: 0.75rem 1rem;
  font-weight: bold;
  border: none;
  border-radius: 2px;
  background-color: ${primaryColor};
  cursor: pointer;
`