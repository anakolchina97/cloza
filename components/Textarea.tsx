import React from "react";
import styled from "styled-components";
import { rem } from "polished";

interface ITextarea {
  label: string;
  isLabel: boolean;
  placeholder: string;
}

const Textarea = ({ label, isLabel, placeholder }: ITextarea) => {
  return (
    <>
      {isLabel && <TextareaLabel>{label}</TextareaLabel>}
      <TextareaWrap placeholder={placeholder} />
    </>
  );
};

const TextareaLabel = styled.label`
  display: block;
  margin-bottom: ${rem(12)};
  font-weight: 500;
  font-size: ${rem(14)};
  line-height: ${rem(17)};
  color: ${(props) => props.theme.colors.black};
`;

const TextareaWrap = styled.textarea`
  width: 100%;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid #eff0f2;
  border-radius: ${rem(12)};
  padding: ${rem(14)} ${rem(16)};
  font-size: ${rem(16)};
  line-height: ${rem(19)};
  font-family: "PT Root UI";
  min-height: ${rem(124)};
  min-width: 100%;
  resize: vertical;
`;

export default Textarea;
