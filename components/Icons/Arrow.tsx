import React from "react";
import styled from "styled-components";
import { rem } from "polished";

interface IArrow {
  w?: number;
  h?: number;
  color?: string;
}

const Arrow = ({ w = 24, h = 24, color = "#121720" }: IArrow) => {
  return (
    <ArrowIcon
      w={w}
      h={h}
      color={color}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M11.9084 4.75828C11.5834 5.08328 11.5834 5.60828 11.9084 5.93328L15.1417 9.16661H2.50002C2.04169 9.16661 1.66669 9.54161 1.66669 9.99994C1.66669 10.4583 2.04169 10.8333 2.50002 10.8333H15.15L11.9167 14.0666C11.5917 14.3916 11.5917 14.9166 11.9167 15.2416C12.2417 15.5666 12.7667 15.5666 13.0917 15.2416L17.75 10.5833C18.075 10.2583 18.075 9.73328 17.75 9.40828L13.0834 4.75828C12.7667 4.43328 12.2334 4.43328 11.9084 4.75828Z" />
      </g>
    </ArrowIcon>
  );
};

const ArrowIcon = styled.svg<{ w: number; h: number; color: string }>`
  width: ${(props) => rem(props.w)};
  height: ${(props) => rem(props.w)};
  fill: ${(props) => props.color};
`;

export default Arrow;
