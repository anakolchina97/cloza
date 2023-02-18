import type { AppProps } from "next/app";
import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import "styles/fonts.scss";
import GlobalStyles from "../styles/GlobalStyles";
import Nav from "../components/Nav";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";

function MyApp({ Component, pageProps }: AppProps) {
  const [showAllContent, setShowAllContent] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
      setShowAllContent(true);
    }, 1500);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cloza</title>
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        {isLoading ? null : (
          <Bars
            height="80"
            width="80"
            color="#121720"
            ariaLabel="bars-loading"
            wrapperStyle={{
              justifyContent: "center",
              alignItems: "center",
              minHeight: "-webkit-fill-available",
              height: "100vh",
            }}
            wrapperClass="loader"
            visible={true}
          />
        )}
        <AllContent showAllContent={showAllContent}>
          <Nav />
          <Search />
          <Component {...pageProps} />
        </AllContent>
      </ThemeProvider>
    </>
  );
}

const AllContent = styled.div<{ showAllContent: boolean }>`
  display: ${(props) => (props.showAllContent ? "block" : "none")};
`;

export default MyApp;
