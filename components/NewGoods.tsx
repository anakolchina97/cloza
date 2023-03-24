import React from "react";
import styled from "styled-components";
import { TitleH2 } from "./Title";
import { rem } from "polished";
import NewGood from "./NewGood";
import Button from "./Button";
import Sort from "./Sort";

type Props = {};

const NewGoods = (props: Props) => {
  const goods = [
    {
      safe: true,
      title: "Black Cap",
      description: "Надевали несколько раз",
      photo: {
        url: "1",
        width: 267,
        height: 182,
      },
      price: "27 550",
      buy: true,
    },
    {
      sale: true,
      safe: true,
      title: "Black Cap",
      description: "Надевали несколько раз",
      photo: {
        url: "2",
        width: 267,
        height: 222,
      },
      price: "27 550",
      oldPrice: "28 599",
      buy: true,
    },
    {
      title: "Black Cap",
      description: "Надевали несколько раз",
      photo: {
        url: "3",
        width: 267,
        height: 154,
      },
      price: "27 550",
    },
    {
      safe: true,
      title: "Black Cap",
      description: "Надевали несколько раз",
      photo: {
        url: "1",
        width: 267,
        height: 182,
      },
      price: "27 550",
      buy: true,
    },
    {
      sale: true,
      safe: true,
      title: "Black Cap",
      description: "Надевали несколько раз",
      photo: {
        url: "2",
        width: 267,
        height: 222,
      },
      price: "27 550",
      oldPrice: "28 599",
      buy: true,
    },
    {
      safe: true,
      title: "Black Cap",
      description: "Надевали несколько раз",
      photo: {
        url: "3",
        width: 267,
        height: 154,
      },
      price: "27 550",
      buy: true,
    },
    {
      safe: true,
      sale: true,
      title: "Black Cap",
      description: "Надевали несколько раз",
      photo: {
        url: "1",
        width: 267,
        height: 182,
      },
      price: "27 550",
      buy: true,
    },
    {
      title: "Black Cap",
      description: "Надевали несколько раз",
      photo: {
        url: "1",
        width: 267,
        height: 182,
      },
      price: "27 550",
    },
  ];

  return (
    <NewGoodsWrap>
      <NewGoodsHeader>
        <NewGoodsTitle>
          <NewGoodsTitleInfo>Недавние поступления</NewGoodsTitleInfo>
          <span>Новые товары</span>
        </NewGoodsTitle>
        <Sort />
      </NewGoodsHeader>
      <NewGoodsCards>
        {goods.map((good, index) => (
          <NewGood {...good} key={index} />
        ))}
      </NewGoodsCards>
      <NewGoodsButton>
        <Button>Показать еще</Button>
      </NewGoodsButton>
    </NewGoodsWrap>
  );
};

const NewGoodsWrap = styled.section`
  margin-bottom: ${rem(64)};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray.light};
`;

const NewGoodsHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${rem(20)};
  margin-bottom: ${rem(48)};
`;

const NewGoodsTitle = styled(TitleH2)`
  margin-bottom: 0;
`;

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
  margin-bottom: ${rem(32)};
`;

const NewGoodsButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${rem(32)};
`;

export default NewGoods;
