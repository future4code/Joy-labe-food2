import { CircularProgress } from '@mui/material'
import React from 'react'
import { Container } from './style'

export const Loading = () => {
  return (
    <Container>
	    <CircularProgress/>
    </Container>
  )
}
