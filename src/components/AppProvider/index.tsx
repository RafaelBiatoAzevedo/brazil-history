import { BrowserRouter } from "react-router-dom";
import { FCWithChildren } from "~/types/FCWithChildren";
import { ThemeProvider } from "styled-components";
import { theme } from "~/styles/theme";

export const AppProvider: FCWithChildren = ({ children }): JSX.Element => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </BrowserRouter>
  );
};
