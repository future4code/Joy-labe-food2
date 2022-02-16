import React from "react"
import AppRoutes from "./routes/AppRoutes"
import { ThemeProvider } from "@mui/material"
import theme from "./theme/theme"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes/>
    </ThemeProvider>
  )
}

export default App
