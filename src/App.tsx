import { Routes } from "./routes";

import { GlobalStyle } from "./styles/global";
import { AppProvider } from "./components/AppProvider";
import { FCWithChildren } from "./types/FCWithChildren";

export const App: FCWithChildren = (): JSX.Element => {
  return (
    <AppProvider>
      <Routes />
      <GlobalStyle />
    </AppProvider>
  );
};
