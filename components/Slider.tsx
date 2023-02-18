import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import Title, { TitleH2 } from "./Title";
import { rem } from "polished";
import { TextItem } from "./Text";
import Link from "next/link";

const Slider = () => {
  return (
    <div>
      <Swiper spaceBetween={50} slidesPerView={1}>
        <SwiperSlide>
          <Slide>
            <SlideContent>
              <SlideTitle tag="h2">
                Быть на стиле - <br />
                значит быть первым
              </SlideTitle>
              <SlideText weight={700} size={20} lineHeight={24} color="black">
                -20% летняя распродажа
              </SlideText>
              <SlideLink href={"/"}>
                <SlideText
                  size={16}
                  lineHeight={19}
                  weight={400}
                  color={"purple"}
                >
                  Условия проведения акции
                </SlideText>
              </SlideLink>
            </SlideContent>
          </Slide>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

const Slide = styled.div`
  background: ${(props) => props.theme.colors.grey.light};
  border-radius: 24px;
  height: 400px;
`;

const SlideContent = styled.div`
  max-width: ${rem(506)};
`;

const SlideTitle = styled(TitleH2)<{ tag: string }>`
  margin-bottom: ${rem(16)};
`;

const SlideText = styled(TextItem)`
  margin-bottom: ${rem(16)};
`;

const SlideLink = styled(Link)`
  margin-bottom: ${rem(32)};
`;

export default Slider;
