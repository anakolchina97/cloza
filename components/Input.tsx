import React from "react";
import styled from "styled-components";
import { rem, rgba } from "polished";

interface IInput {
  type: string;
  placeholder: string;
}

const Input = ({ type, placeholder }: IInput) => {
  return <InputWrap type={type} placeholder={placeholder} />;
};

const InputWrap = styled.input<{ type: string }>`
  width: 100%;
  background: none;
  border: none;
  outline: none;
  height: 100%;
  font-weight: 400;
  font-size: ${rem(20)};
  line-height: ${rem(24)};
  color: ${(props) => rgba(props.theme.colors.white, 1)};
  &::placeholder {
    position: relative;
    color: ${(props) => rgba(props.theme.colors.white, 0.5)};
  }
`;

export default Input;
