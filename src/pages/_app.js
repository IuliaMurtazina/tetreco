import "@/styles/globals.scss";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme/muiTheme";
import Layout from "@/components/layout/Layout";
import { wrapper } from "@/store";
import { Provider } from "react-redux";

const App = ({ Component, pageProps }) => {
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
