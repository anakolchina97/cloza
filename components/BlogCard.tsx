import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Link from "next/link";

interface IBlogCardImg {
  url: string;
  width: number;
  height: number;
}

interface IBlogCard {
  img: IBlogCardImg;
  date: string;
  title: string;
  text: string;
}

const BlogCard = ({
  img: { url, width, height },
  date,
  title,
  text,
}: IBlogCard) => {
  return (
    <BlogCardWrap href={"/"}>
      <BlogCardImgBox>
        <BlogCardImg
          src={`/images/blog-${url}.png`}
          width={width}
          height={height}
          alt={"/"}
        />
      </BlogCardImgBox>
      <BlogCardDate>{date}</BlogCardDate>
      <BlogCardTitle>{title}</BlogCardTitle>
      <BlogCardText>{text}</BlogCardText>
      <BlogCardArrow />
    </BlogCardWrap>
  );
};

const BlogCardWrap = styled(Link)``;

const BlogCardImgBox = styled.div`
  margin-bottom: ${rem(14)};
  overflow: hidden;
  border-radius: ${rem(16)};
`;

const BlogCardImg = styled(Image)``;

const BlogCardDate = styled.p`
  font-size: ${rem(14)};
  line-height: ${rem(17)};
  color: ${(props) => props.theme.colors.gray.default};
  margin-bottom: ${rem(8)};
`;

const BlogCardTitle = styled.p`
  font-weight: 500;
  font-size: ${rem(20)};
  line-height: ${rem(24)};
  margin-bottom: ${rem(16)};
`;

const BlogCardText = styled.p`
  color: ${(props) => props.theme.colors.gray.default};
  margin-bottom: ${rem(16)};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BlogCardArrow = styled.div`
  width: ${rem(24)};
  height: ${rem(24)};
  background: url("/images/blog-arrow.svg");
  margin-left: auto;
  display: block;
`;

export default BlogCard;
