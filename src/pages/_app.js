import "@/styles/globals.scss";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme/muiTheme";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
