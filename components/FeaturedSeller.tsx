import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Star from "./Icons/Star";
import StarHalf from "./Icons/StarHalf";

interface IFeaturedSeller {
  img: string;
  title: string;
  voices: number | string;
  stars?: number;
}

const FeaturedSeller = ({ img, title, voices, stars }: IFeaturedSeller) => {
  return (
    <FeaturedSellerWrap>
      <FeaturedSellerImgBox>
        <FeaturedSellerImg
          src={`/images/featured-seller-${img}.png`}
          width={267}
          height={267}
          alt={"/"}
        />
      </FeaturedSellerImgBox>
      <FeaturedSellerTitle>{title}</FeaturedSellerTitle>
      <FeaturedSellerFooter>
        <FeaturedSellerStars>
          <Star />
          <Star />
          <Star />
          <Star />
          <StarHalf />
        </FeaturedSellerStars>
        <FeaturedSellerVoices>
          <FeaturedSellerVoice>{voices}</FeaturedSellerVoice> голосов
        </FeaturedSellerVoices>
      </FeaturedSellerFooter>
    </FeaturedSellerWrap>
  );
};

const FeaturedSellerWrap = styled.article``;

const FeaturedSellerImgBox = styled.div`
  width: ${rem(267)};
  height: ${rem(267)};
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: ${rem(24)};
`;

const FeaturedSellerImg = styled(Image)``;

const FeaturedSellerTitle = styled.p`
  font-weight: 500;
  margin-bottom: ${rem(12)};
`;

const FeaturedSellerFooter = styled.footer`
  display: flex;
  align-items: center;

  gap: ${rem(12)};
`;

const FeaturedSellerStars = styled.div`
  display: flex;
  align-items: center;
`;

const FeaturedSellerVoices = styled.span`
  color: ${(props) => props.theme.colors.gray.default};
`;

const FeaturedSellerVoice = styled.span``;

export default FeaturedSeller;
