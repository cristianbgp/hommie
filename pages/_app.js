import * as React from "react";
import {
  ThemeProvider,
  ColorModeProvider,
  CSSReset,
  theme,
} from "@chakra-ui/core";

const customIcons = {
  "icon-hommie": {
    path: (
      <>
        <path d="M3 67.5L65.5 5L128 67.5" stroke="currentColor" strokeWidth="6" fill="none" />
        <path d="M20 67V128H111V67" stroke="currentColor" strokeWidth="6" fill="none" />
      </>
    ),
    viewBox: "0 0 131 131",
  },
};

const customTheme = {
  ...theme,
  icons: {
    ...theme.icons,
    ...customIcons,
  },
};

export default ({ Component, pageProps }) => (
  <ThemeProvider theme={customTheme}>
    <ColorModeProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ColorModeProvider>
  </ThemeProvider>
);
