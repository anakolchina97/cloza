import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import { rem } from "polished";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Sort = () => {
  const [selectedOption, setSelectedOption] = useState<null | any>(null);

  return (
    <SortWrap>
      <CustomSelect
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder="Цена по возрастанию"
      />
    </SortWrap>
  );
};

const SortWrap = styled.div``;

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: "var(--colors-ui-base)",
      color: "var(--colors-text)",
      borderRadius: `${rem(16)}`,
      padding: "0.25rem",
      boxShadow: "var(--shadow)",
      height: "50px",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      cursor: "pointer",
      color: "var(--colors-text)",
      backgroundColor: "white",
    }),
  },
})`
  width: ${rem(250)};
  & > * {
    box-shadow: var(--shadow);
  }
  & input {
    padding-left: 0.25rem;
  }
  & > div[id] {
    background-color: var(--colors-ui-base);
  }
`;

export default Sort;
