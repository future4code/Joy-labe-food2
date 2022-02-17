import styled, { keyframes } from 'styled-components'
import { primaryColor } from '../../constants/colors'

export const Elarge = keyframes`
  from {
  transform: scale(1.5);
  }
  to {
  transform: scale(4);
  }
  `
export const ImgElarge = styled.div`
  background-repeat: no-repeat;
  display: inline-block;
  animation: ${Elarge} 3s linear;
`

export const InitialContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const LogoContainer = styled.img`
  width: 5.875rem;
  height: 3.063rem;
  max-width: 100%;
`
