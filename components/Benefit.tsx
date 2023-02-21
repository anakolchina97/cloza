import React from "react";
import styled from "styled-components";
import { rem, rgba } from "polished";

interface IBenefit {
  title: string;
  text: string;
}

const Benefit = ({ title, text }: IBenefit) => {
  return (
    <BenefitWrap>
      <BenefitIconBox>
        <BenefitIcon />
      </BenefitIconBox>
      <BenefitTextBox>
        <BenefitTitle>{title}</BenefitTitle>
        <BenefitText
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></BenefitText>
      </BenefitTextBox>
    </BenefitWrap>
  );
};

const BenefitWrap = styled.div`
  display: grid;
  grid-template-columns: ${rem(40)} auto;
  gap: ${rem(16)};
  padding: ${rem(32)};
  border: 1px solid ${(props) => props.theme.colors.grey.light};
  border-radius: ${rem(16)};
`;

const BenefitIconBox = styled.div``;

const BenefitIcon = styled.i`
  position: relative;
  display: block;
  width: ${rem(40)};
  height: ${rem(40)};
  background: url("check.svg") no-repeat center center;
  &::after {
    content: "";
    position: absolute;
    top: ${rem(8)};
    left: ${rem(-8)};
    width: inherit;
    height: inherit;
    background: ${(props) => rgba(props.theme.colors.purple, 0.1)};
    border-radius: 50%;
  }
`;

const BenefitTextBox = styled.div`
  color: ${(props) => props.theme.colors.black};
  padding-top: ${rem(6)};
`;

const BenefitTitle = styled.p`
  font-weight: 700;
  font-size: ${rem(20)};
  line-height: ${rem(24)};
  margin-bottom: ${rem(24)};
`;

const BenefitText = styled.p`
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: ${rem(19)};
`;

export default Benefit;
