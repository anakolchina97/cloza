import React from "react";
import styled from "styled-components";
import { rem, rgba } from "polished";

interface IInput {
  type: string;
  placeholder: string;
  label?: string;
  isLabel?: boolean;
}

const Input = ({ type, placeholder, label, isLabel }: IInput) => {
  return (
    <>
      {isLabel && <InputLabel>{label}</InputLabel>}
      <InputWrap type={type} placeholder={placeholder} />
    </>
  );
};

const InputWrap = styled.input<{ type: string }>`
  ${(props) => {
    if (props.type === "search") {
      return `
        border: none;
        height: 100%;
        font-weight: 400;
        font-size: ${rem(20)};
        line-height: ${rem(24)};
        color: ${rgba(props.theme.colors.white, 1)};
        &::placeholder {
          position: relative;
          color: ${rgba(props.theme.colors.white, 0.5)};
        }
      `;
    } else {
      return `
        font-size: 16px;
        line-height: 19px;
        padding: ${rem(14)} ${rem(16)};
        background: #FFFFFF;
        border: 1px solid #EFF0F2;
        border-radius: 12px;
        &::placeholder {
          color: #9095A9;
        }
      `;
    }
  }}
  width: 100%;
  background: none;
  outline: none;
`;

const InputLabel = styled.label`
  display: block;
  font-weight: 500;
  font-size: ${rem(14)};
  line-height: ${rem(17)};
  color: ${(props) => props.theme.colors.black};
  margin-bottom: ${rem(12)};
`;

export default Input;
