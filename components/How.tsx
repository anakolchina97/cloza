import React from "react";
import styled from "styled-components";
import { rem } from "polished";

interface IHow {
  text: string;
  index: number;
}

const How = ({ text, index }: IHow) => {
  return (
    <HowWrap>
      <HowNumber>{index + 1}</HowNumber>
      <HowText
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      ></HowText>
    </HowWrap>
  );
};

const HowWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(24)};
  padding-bottom: ${rem(23)};
  margin-bottom: ${rem(24)};
  border-bottom: 1px solid ${(props) => props.theme.colors.grey.light};
  &:last-child {
    border: none;
  }
`;

const HowNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${rem(64)};
  height: ${rem(64)};
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.purple};
  font-weight: 700;
  font-size: ${rem(24)};
  line-height: ${rem(29)};
  color: ${(props) => props.theme.colors.purple};
`;

const HowText = styled.p`
  font-weight: 400;
  font-size: ${rem(18)};
  line-height: ${rem(22)};
`;

export default How;
