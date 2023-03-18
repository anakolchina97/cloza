import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";
import styled from "styled-components";
import { rem } from "polished";

interface IButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  arrow?: Boolean;
}

const Button = ({ children, arrow, onClick }: IButton) => {
  return (
    <ButtonWrap onClick={onClick}>
      {children} {arrow && <ButtonArrow />}
    </ButtonWrap>
  );
};

const ButtonWrap = styled.button`
  display: flex;
  align-items: center;
  gap: ${rem(10)};
  font-weight: 500;
  font-size: ${rem(16)};
  line-height: ${rem(19)};
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.purple};
  padding: ${rem(14)} ${rem(32)};
  border-radius: ${rem(12)};
  border: none;
  cursor: pointer;
`;

const ButtonArrow = styled.i`
  width: ${rem(20)};
  height: ${rem(20)};
  background: url("button-arrow.svg") no-repeat center center;
`;

export default Button;
