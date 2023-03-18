import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Benefit from "./Benefit";

// TODO: разобраться и определить правильный тип
interface IBenefits {
  dataBenefits: any;
}

interface IBenefit {
  title: string;
  text: string;
}

const Benefits = ({ dataBenefits }: IBenefits) => {
  return (
    <BenefitsWrap>
      {dataBenefits.map(({ title, text }: IBenefit) => (
        <Benefit title={title} text={text} key={title} />
      ))}
    </BenefitsWrap>
  );
};

const BenefitsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${rem(24)};
  margin-bottom: ${rem(64)};
  padding-bottom: ${rem(64)};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray.light};
`;

export default Benefits;
