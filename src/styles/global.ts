import { createGlobalStyle } from "styled-components";

import "@fontsource/open-sans";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans", Helvetica, sans-serif;
  }
  
  html {
    @media print {
    -webkit-print-color-adjust: exact;
    }
    font-size: 14px;
  }

  @media (max-width: ${(p) => p.theme.resolutions.medium}) {
    html {
      font-size: 10px;
    }
  }

  @media (max-width: ${(p) => p.theme.resolutions.small}) {
    html {
      font-size: 8px;
    }
  }

  p, span, h1, h2, h3, h4, h5 {
    line-height: 1em;
    letter-spacing: 0.2px;
  }

  input {
    color: ${(p) => p.theme.colors.font};
  }
`;
