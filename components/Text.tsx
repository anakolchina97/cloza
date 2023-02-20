import React, { ReactNode } from "react";
import styled from "styled-components";
import { rem } from "polished";
import Link from "next/link";

interface IText {
  size: number;
  weight: number;
  color: string;
  lineHeight: number;
  children: ReactNode;
}

const Text = ({ children, weight, size, color, lineHeight }: IText) => (
  <TextItem weight={weight} size={size} lineHeight={lineHeight} color={color}>
    {children}
  </TextItem>
);

const sizeMobile = (size: number) => {
  switch (size) {
    case 20:
      return 16;
    default:
      return 0;
  }
};

export const TextItem = styled.p<{
  weight: number;
  size: number;
  color: string;
  lineHeight: number;
}>`
  ${(props) => {
    return `
      font-weight: ${props.weight};
      font-size: ${rem(props.size)};
      line-height: ${rem(props.lineHeight)};
      color: ${props.theme.colors.color};
    `;
  }}
  @media (max-width: 1000px) {
    font-size: ${(props) => rem(sizeMobile(props.size))};
  }
`;

export default Text;
