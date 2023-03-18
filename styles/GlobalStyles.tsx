import { createGlobalStyle } from "styled-components";
import { rem } from "polished";

const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: "PT Root UI", Arial, Helvetica, sans-serif;
    color: #121720;
    font-size: ${rem(16)};
    line-height: ${rem(19)};

  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  ul, ol {
    list-style: none;
  }

  .swiper-pagination {
    display: flex;
    gap: ${rem(8)};
    text-align: left;
    padding-left: ${rem(32)};
    margin-bottom: ${rem(15)};
  }

  .swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0;
    width: ${rem(8)};
    height: ${rem(8)};
  }
  .swiper-pagination-bullet-active{
    background: #7984C0;
    
  }
`;

export default GlobalStyles;
