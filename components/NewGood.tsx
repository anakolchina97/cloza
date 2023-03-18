import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Favorites from "./Icons/Favorites";
import Basket from "./Icons/Basket";
import LabelGood from "./LabelGood";

interface INewGood {
  safe: boolean;
  title: string;
  description: string;
  oldPrice?: string | number;
}

const NewGood = ({ safe, title, description, oldPrice }: INewGood) => {
  return (
    <NewGoodWrap>
      <NewGoodImg>
        <LabelGood />
        <Image
          src={"/new-good-1.png"}
          width={267}
          height={182}
          alt={"new-good-1"}
        />
      </NewGoodImg>
      <NewGoodHeader>
        <NewGoodTitle>
          {safe && <NewGoodSafe />}
          <span>{title}</span>
        </NewGoodTitle>
        <NewGoodPrice>
          {oldPrice && <NewGoodPriceOld>{oldPrice}₽</NewGoodPriceOld>}
          <span>27 550₽</span>
        </NewGoodPrice>
      </NewGoodHeader>
      <NewGoodDescription>{description}</NewGoodDescription>
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
  position: relative;
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

const NewGoodTitle = styled.div`
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

const NewGoodPrice = styled.div`
  text-align: right;
  display: flex;
  gap: ${rem(12)};
`;

const NewGoodPriceOld = styled.p`
  text-decoration: line-through;
  color: ${(props) => props.theme.colors.red};
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
