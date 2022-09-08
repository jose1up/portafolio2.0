// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  colors: {
    brand: {
      100: "#fa7921",
      200: "#b9a44c",
      800: "#566E3D",
      900: "#0C4767",
    },
  },
});

export default theme;
