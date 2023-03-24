import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { TitleH2 } from "./Title";
import PageLink from "./PageLink";

type Props = {};

const PopularCategories = (props: Props) => {
  return (
    <PopularCategoriesWrap>
      <PopularCategoriesHeader>
        <PopularCategoriesTitle>Популярные категории</PopularCategoriesTitle>
        <PageLink href="/">Все категории</PageLink>
      </PopularCategoriesHeader>
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

export default PopularCategories;
