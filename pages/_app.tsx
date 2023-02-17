import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import "styles/fonts.scss";
import GlobalStyles from "../styles/GlobalStyles";
import Nav from "../components/Nav";
import Search from "../components/Search";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cloza</title>
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Nav />
        <Search />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
