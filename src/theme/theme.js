import { createTheme } from "@material-ui/core"
import { primaryColor, neutralColor, secondaryColor } from "./colors"

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastext: "white",
    },
    text: {
      primary: neutralColor,
      secondary: secondaryColor
    },
  },
})

export default theme
