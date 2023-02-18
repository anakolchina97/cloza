import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import Title, { TitleH2 } from "./Title";
import { rem } from "polished";
import { TextItem } from "./Text";
import Link from "next/link";
import Image from "next/image";

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
            <SlidePhotoWrap>
              <Image
                src={"/slider.png"}
                width={828}
                height={828}
                alt={"slider"}
              />
            </SlidePhotoWrap>
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
  position: relative;
  display: flex;
  background: ${(props) => props.theme.colors.grey.light};
  border-radius: 24px;
  min-height: 400px;
  overflow: hidden;
`;

const SlideContent = styled.div`
  align-self: center;
  position: relative;
  padding-left: ${rem(32)};
  z-index: 1;
  flex-shrink: 0;
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

const SlidePhotoWrap = styled.div`
  position: absolute;
  left: calc(310 / 1140 * 100%);
  top: ${rem(-33)};
`;

export default Slider;
