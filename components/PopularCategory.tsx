import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Arrow from "./Icons/Arrow";
import { rem } from "polished";
import Link from "next/link";

interface IPopularCategory {
  img: string;
  title: string;
  href: string;
}

const PopularCategory = ({ img, title, href = "" }: IPopularCategory) => {
  return (
    <PopularCategoryWrap href={href}>
      <PopularCategoryImgBox>
        <PopularCategoryImg
          src={`/popular-category-${img}.png`}
          width={267}
          height={267}
          alt={"popular-category-1"}
        />
      </PopularCategoryImgBox>
      <PopularCategoryFooter>
        <PopularCategoryTitle>{title}</PopularCategoryTitle>
        <Arrow />
      </PopularCategoryFooter>
    </PopularCategoryWrap>
  );
};

const PopularCategoryWrap = styled(Link)``;

const PopularCategoryImgBox = styled.div`
  border-radius: ${rem(16)};
  overflow: hidden;
  margin-bottom: ${rem(16)};
`;

const PopularCategoryImg = styled(Image)`
  display: block;
`;

const PopularCategoryFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PopularCategoryTitle = styled.p`
  font-weight: 500;
  font-size: ${rem(20)};
  line-height: ${rem(24)};
`;

export default PopularCategory;
