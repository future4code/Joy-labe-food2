import { createTheme } from "@mui/material"
import { primaryColor, neutralColor } from "./colors"

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "black",
    },
    text: {
      primary: neutralColor,
      secondary: "black",
    },
  },
})

export default theme
