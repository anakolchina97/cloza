import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import PageLink from "./PageLink";
import { TitleH2 } from "./Title";
import FeaturedSeller from "./FeaturedSeller";

type Props = {};

const FeaturedSellers = (props: Props) => {
  const sellers = [
    {
      img: "1",
      title: "Евгений Ефремов",
      voices: "375",
      stars: 4.5,
    },
    {
      img: "1",
      title: "Анатолий Шестаков",
      voices: "283",
    },
    {
      img: "1",
      title: "Владислав Синицин",
      voices: "261",
    },
    {
      img: "1",
      title: "Георгий Власов",
      voices: "197",
    },
  ];
  return (
    <FeaturedSellersWrap>
      <FeaturedSellersHeader>
        <FeaturedSellersTitle>
          <FeaturedSellersTitleInfo>
            Продавцы, заслужившие доверие
          </FeaturedSellersTitleInfo>
          <span>Популярные продавцы</span>
        </FeaturedSellersTitle>
        <PageLink href="/">Все продавцы</PageLink>
      </FeaturedSellersHeader>
      <FeaturedSellersCards>
        {sellers.map((props) => (
          <FeaturedSeller {...props} key={props.title} />
        ))}
      </FeaturedSellersCards>
    </FeaturedSellersWrap>
  );
};

const FeaturedSellersWrap = styled.section`
  margin-bottom: ${rem(64)};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray.light};
`;

const FeaturedSellersHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${rem(20)};
  margin-bottom: ${rem(62)};
`;

const FeaturedSellersTitle = styled(TitleH2)`
  margin-bottom: 0;
`;

const FeaturedSellersTitleInfo = styled.p`
  margin-bottom: ${rem(4)};
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: ${rem(19)};
  color: ${(props) => props.theme.colors.gray.default};
`;

const FeaturedSellersCards = styled.div`
  display: grid;
  gap: ${rem(24)};
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: ${rem(64)};
`;

export default FeaturedSellers;
