import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  colors: {
    primary: {
      500: "#00FF8B",
      600: "#14E284",
    },
  },
})

export default theme;