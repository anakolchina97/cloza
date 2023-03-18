import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Favorites from "./Icons/Favorites";
import Basket from "./Icons/Basket";

type Props = {};

const NewGood = (props: Props) => {
  return (
    <NewGoodWrap>
      <NewGoodImg>
        <Image
          src={"/new-good-1.png"}
          width={267}
          height={182}
          alt={"new-good-1"}
        />
      </NewGoodImg>
      <NewGoodHeader>
        <NewGoodTitle>
          <NewGoodSafe />
          <span>Black Cap</span>
        </NewGoodTitle>
        <NewGoodPrice>27 550₽</NewGoodPrice>
      </NewGoodHeader>
      <NewGoodDescription>Надевали несколько раз</NewGoodDescription>
      <NewGoodSize>XS</NewGoodSize>
      <NewGoodButtons>
        <NewGoodButton>
          <Favorites />
        </NewGoodButton>
        <NewGoodButton>
          <Basket />
        </NewGoodButton>
      </NewGoodButtons>
    </NewGoodWrap>
  );
};

const NewGoodWrap = styled.article``;

const NewGoodImg = styled.div`
  border-radius: ${rem(16)};
  overflow: hidden;
  margin-bottom: ${rem(14)};
  img {
    display: block;
  }
`;

const NewGoodHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: ${rem(10)};
  font-weight: 500;
  padding-bottom: ${rem(12)};
  margin-bottom: ${rem(12)};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray.light};
`;

const NewGoodTitle = styled.p`
  display: flex;
  align-items: center;
  gap: ${rem(8)};
`;

const NewGoodSafe = styled.i`
  width: ${rem(20)};
  height: ${rem(20)};
  background: url("/safe.svg") no-repeat center center;
  background-size: cover;
`;

const NewGoodPrice = styled.p`
  text-align: right;
`;

const NewGoodDescription = styled.p`
  color: ${(props) => props.theme.colors.gray.default};
  margin-bottom: ${rem(8)};
`;

const NewGoodSize = styled.p`
  color: ${(props) => props.theme.colors.gray.default};
  margin-bottom: ${rem(16)};
`;

const NewGoodButtons = styled.div`
  display: flex;
  gap: ${rem(12)};
`;

const NewGoodButton = styled.button`
  width: ${rem(20)};
  height: ${rem(20)};
  border: none;
  background: transparent;
  cursor: pointer;
`;

export default NewGood;
