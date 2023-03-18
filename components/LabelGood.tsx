import React, { ReactNode } from "react";
import styled from "styled-components";
import { rem } from "polished";

interface ILabelGood {
  sale?: boolean;
}

const LabelGood = ({ sale }: ILabelGood) => {
  return <LabelGoodWrap sale={sale}>{sale ? "Sale" : "New"}</LabelGoodWrap>;
};

const LabelGoodWrap = styled.div<{ sale?: boolean }>`
  position: absolute;
  top: ${rem(16)};
  left: ${rem(16)};
  padding: ${rem(4)} ${rem(12)};
  font-weight: 500;
  font-size: ${rem(14)};
  line-height: ${rem(17)};
  border-radius: ${rem(8)};
  color: ${(props) =>
    props.sale ? props.theme.colors.white : props.theme.colors.black};
  background: ${(props) =>
    props.sale ? props.theme.colors.red : props.theme.colors.white};
`;

export default LabelGood;
