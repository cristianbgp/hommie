import * as React from "react";
import {
  ThemeProvider,
  ColorModeProvider,
  CSSReset,
  theme,
} from "@chakra-ui/core";

export default ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ColorModeProvider>
  </ThemeProvider>
);
