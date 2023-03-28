import React from "react";
import styled from "styled-components";
import PageLink from "./PageLink";
import { TitleH2 } from "./Title";
import { rem } from "polished";
import BlogCard from "./BlogCard";
import Link from "next/link";

type Props = {};

const OurBlog = (props: Props) => {
  const posts = [
    {
      img: {
        url: "1",
        width: 267,
        height: 227,
      },
      date: "12-02-2020",
      title: "Выбор редакции: кроссовки",
      text: "Написать что-то новое о кроссовках и при этом не выглядеть как",
    },
    {
      img: {
        url: "2",
        width: 267,
        height: 205,
      },
      date: "12-02-2020",
      title: "Воспоминания Найджела: культовая куртка Consort от Henri Lloyd",
      text: "Поклонники парусного спорта, вы будете рады узнать, что мы",
    },
    {
      img: {
        url: "3",
        width: 267,
        height: 241,
      },
      date: "12-02-2020",
      title: "В мире из грез: классика рекламы Ralph Lauren",
      text: "Ральфу Лорену приписывают фразу «Я создаю не одежду – я создаю",
    },
    {
      img: {
        url: "4",
        width: 267,
        height: 217,
      },
      date: "12-02-2020",
      title: "Выбор редакции: кроссовки",
      text: "Написать что-то новое о кроссовках и при этом не выглядеть как",
    },
  ];
  return (
    <OurBlogWrap href={"/"}>
      <OurBlogHeader>
        <OurBlogTitle>
          <OurBlogTitleInfo>Последние записи</OurBlogTitleInfo>
          <span>Наш блог</span>
        </OurBlogTitle>
        <PageLink href="/">Все новости</PageLink>
      </OurBlogHeader>
      <OurBlogCards>
        {posts.map((props) => (
          <BlogCard {...props} key={props.title} />
        ))}
      </OurBlogCards>
    </OurBlogWrap>
  );
};

const OurBlogWrap = styled(Link)`
  margin-bottom: ${rem(100)};
`;

const OurBlogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${rem(48)};
`;

const OurBlogTitle = styled(TitleH2)`
  margin-bottom: ${rem(0)};
`;

const OurBlogTitleInfo = styled.div`
  margin-bottom: ${rem(4)};
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: ${rem(19)};
  color: ${(props) => props.theme.colors.gray.default};
`;

const OurBlogCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${rem(24)};
  margin-bottom: ${rem(64)};
`;

export default OurBlog;
