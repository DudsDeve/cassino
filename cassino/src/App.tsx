import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Styles/global";
import { theme } from "./Styles/theme/index";
import { Home } from "./pages/Home";

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
