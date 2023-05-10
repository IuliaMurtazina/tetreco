import "@/styles/globals.scss";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme/muiTheme";
import Layout from "@/components/layout/Layout";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
