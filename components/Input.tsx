import React from "react";
import styled from "styled-components";
import { rem, rgba } from "polished";

interface IInput {
  type: string;
  placeholder: string;
  label?: string;
  isLabel?: boolean;
  page?: string;
}

const Input = ({ type, placeholder, label, isLabel, page }: IInput) => {
  return (
    <>
      {isLabel && <InputLabel>{label}</InputLabel>}
      <InputWrap page={page} type={type} placeholder={placeholder} />
    </>
  );
};

const InputWrap = styled.input<{ type: string; page?: string }>`
  ${(props) => {
    if (props.type === "search") {
      return `
        border: none;
        height: 100%;
        font-weight: 400;
        font-size:  ${props.page == "intro" ? rem(16) : rem(20)};
        line-height: ${props.page == "intro" ? rem(19) : rem(24)} ;
        color: ${
          props.page == "intro"
            ? props.theme.colors.gray.default
            : rgba(props.theme.colors.white, 0.5)
        };
        &::placeholder {
          position: relative;
          color: ${
            props.page == "intro"
              ? props.theme.colors.gray.default
              : rgba(props.theme.colors.white, 0.5)
          };
        }
      `;
    } else {
      return `
        font-size: ${rem(16)};
        line-height: ${rem(19)};
        padding: ${rem(14)} ${rem(16)};
        background: ${props.theme.colors.white};
        border: 1px solid #EFF0F2;
        border-radius: ${rem(12)};
        &::placeholder {
          color: #9095A9;
        }
      `;
    }
  }}
  width: 100%;
  background: none;
  outline: none;
  font-family: "PT Root UI", Arial, sans-serif;
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
