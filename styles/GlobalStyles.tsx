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

  .popular-brands {
    position: static;
    max-width: ${rem(947)};
    width: 100%;
    margin: 0 auto;
    .swiper-button-prev,
    .swiper-button-next {
      width: ${rem(32)};
      height: ${rem(32)};
      border-radius: ${rem(8)};
      border: 1px solid #EFF0F2;
      &::after {
        content: '';
        width: ${rem(20)};
        height: ${rem(20)};
        background: url('./slider-arrow.svg') no-repeat center center;
      }
    }
    .swiper-button-prev {
      left: 0;
      &::after {
        transform: scale(-1, 1);
      }
    }
    .swiper-button-next  {
      right: 0;
    }
  }
`;

export default GlobalStyles;
