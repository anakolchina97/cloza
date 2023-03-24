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
      <SortTitle>Сортировать:</SortTitle>
      <CustomSelect
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder="Цена по возрастанию"
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </SortWrap>
  );
};

const SortWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(12)};
`;

const SortTitle = styled.p`
  color: ${(props) => props.theme.colors.gray.default};
`;

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided: any) => ({
      ...provided,
      borderRadius: `${rem(16)}`,
      padding: "0.25rem",
      height: "50px",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      cursor: "pointer",
      backgroundColor: "white",
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      padding: 0,
      paddingRight: ` ${rem(10)}`,
      color: `#121720`,
    }),
  },
})`
  width: ${rem(223)};
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
