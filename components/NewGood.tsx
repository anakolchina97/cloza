import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { rem } from "polished";

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

export default NewGood;
