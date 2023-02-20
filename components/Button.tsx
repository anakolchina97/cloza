import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";
import styled from "styled-components";
import { rem } from "polished";
import { AppProps } from "next/app";

interface IButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

const Button = ({ children, onClick }: IButton) => {
  return <ButtonWrap onClick={onClick}>{children}</ButtonWrap>;
};

const ButtonWrap = styled.button`
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

export default Button;
