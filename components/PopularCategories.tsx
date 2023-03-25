import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { TitleH2 } from "./Title";
import PageLink from "./PageLink";
import PopularCategory from "./PopularCategory";

type Props = {};

const PopularCategories = (props: Props) => {
  const goods = [
    {
      img: "1",
      title: "Рюкзаки",
      href: "/",
    },
    {
      img: "2",
      title: "Обувь",
      href: "/",
    },
    {
      img: "3",
      title: "Футболки",
      href: "/",
    },
    {
      img: "4",
      title: "Головные уборы",
      href: "/",
    },
  ];
  return (
    <PopularCategoriesWrap>
      <PopularCategoriesHeader>
        <PopularCategoriesTitle>Популярные категории</PopularCategoriesTitle>
        <PageLink href="/">Все категории</PageLink>
      </PopularCategoriesHeader>
      <PopularCategoriesCards>
        {goods.map((props) => (
          <PopularCategory {...props} key={props.title} />
        ))}
      </PopularCategoriesCards>
    </PopularCategoriesWrap>
  );
};

const PopularCategoriesWrap = styled.section`
  margin-bottom: ${rem(64)};
`;

const PopularCategoriesHeader = styled.header`
  display: flex;
  align-items: center;
  gap: ${rem(20)};
  justify-content: space-between;
  margin-bottom: ${rem(48)};
`;

const PopularCategoriesTitle = styled(TitleH2)`
  margin-bottom: 0;
`;

const PopularCategoriesCards = styled.div`
  display: grid;
  gap: ${rem(24)};
  grid-template-columns: repeat(4, 1fr);
  padding-bottom: ${rem(64)};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray.light};
`;

export default PopularCategories;
