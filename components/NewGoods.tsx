import React from "react";
import styled from "styled-components";
import { TitleH2 } from "./Title";
import { rem } from "polished";
import NewGood from "./NewGood";

type Props = {};

const NewGoods = (props: Props) => {
  return (
    <NewGoodsWrap>
      <NewGoodsTitle>
        <NewGoodsTitleInfo>Недавние поступления</NewGoodsTitleInfo>
        <span>Новые товары</span>
      </NewGoodsTitle>
      <NewGoodsCards>
        <NewGood />
      </NewGoodsCards>
    </NewGoodsWrap>
  );
};

const NewGoodsWrap = styled.section`
  margin-bottom: ${rem(64)};
`;

const NewGoodsTitle = styled(TitleH2)``;

const NewGoodsTitleInfo = styled.p`
  margin-bottom: ${rem(4)};
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: ${rem(19)};
  color: ${(props) => props.theme.colors.gray.default};
`;

const NewGoodsCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${rem(32)} ${rem(24)};
`;

export default NewGoods;
