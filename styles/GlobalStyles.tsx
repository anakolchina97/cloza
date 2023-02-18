import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "PT Root UI", Arial, Helvetica, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ul, ol {
    list-style: none;
  }
  
`;

export default GlobalStyles;
