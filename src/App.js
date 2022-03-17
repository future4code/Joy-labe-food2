import { ThemeProvider } from '@mui/material'
import React from 'react'

import theme from './constants/theme'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
