import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import styled from "styled-components";
import { TitleH2 } from "./Title";
import { rem } from "polished";
import { TextItem } from "./Text";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  const fakeArray = [0, 1, 2, 3];
  return (
    <SliderWrap>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
      >
        {fakeArray.map((index) => (
          <SwiperSlide key={index}>
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
                <Button arrow={true}>Подробнее</Button>
              </SlideContent>
              <SlidePhotoWrap>
                <Image
                  src={"/slider.png"}
                  priority={true}
                  width={828}
                  height={828}
                  alt={"slider"}
                />
              </SlidePhotoWrap>
            </Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrap>
  );
};

const SliderWrap = styled.section`
  margin-bottom: ${rem(32)};
`;

const Slide = styled.div`
  position: relative;
  display: flex;
  background: ${(props) => props.theme.colors.gray.light};
  border-radius: ${rem(24)};
  min-height: ${rem(400)};
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
  display: block;
  margin-bottom: ${rem(32)};
  color: ${(props) => props.theme.colors.purple};
  margin-bottom: ${rem(32)};
`;

const SlidePhotoWrap = styled.div`
  position: absolute;
  left: calc(310 / 1140 * 100%);
  top: ${rem(-33)};
`;

export default Slider;
