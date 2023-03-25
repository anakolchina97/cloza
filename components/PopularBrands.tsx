import React from "react";
import styled from "styled-components";
import { rem } from "polished";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import PageLink from "./PageLink";
import { TitleH2 } from "./Title";

type Props = {};

const PopularBrands = (props: Props) => {
  return (
    <PopularBrandsWrap>
      <PopularBrandsHeader>
        <PopularBrandsTitle>Популярные бренды</PopularBrandsTitle>
        <PageLink href="/">Все бренды</PageLink>
      </PopularBrandsHeader>
      <PopularBrandsSlider>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="popular-brands"
          slidesPerView={6}
          spaceBetween={103}
        >
          <SwiperSlide>
            <img src="./adidas.svg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./nike.svg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./adidas.svg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./nike.svg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./adidas.svg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./nike.svg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./adidas.svg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./nike.svg" />
          </SwiperSlide>
        </Swiper>
      </PopularBrandsSlider>
    </PopularBrandsWrap>
  );
};

const PopularBrandsWrap = styled.section`
  margin-bottom: ${rem(64)};
`;

const PopularBrandsHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${rem(48)};
`;

const PopularBrandsTitle = styled(TitleH2)`
  margin-bottom: 0;
`;

const PopularBrandsSlider = styled.div`
  position: relative;
`;

export default PopularBrands;
