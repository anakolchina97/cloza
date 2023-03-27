import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Advantage from "./Advantage";

// TODO: разобраться и определить правильный тип
interface IAdvantages {
  dataAdvantages: any;
  page: string;
}

interface IAdvantage {
  icon: string;
  title: string;
  text: string;
}

const Advantages = ({ dataAdvantages, page }: IAdvantages) => {
  return (
    <AdvantagesWrap page={page}>
      {dataAdvantages.map(({ title, text, icon }: IAdvantage) => (
        <Advantage
          title={title}
          text={text}
          icon={icon}
          key={title}
          page={page}
        />
      ))}
    </AdvantagesWrap>
  );
};

const AdvantagesWrap = styled.div<{ page: string }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${rem(24)};
  margin-bottom: ${(props) => (props.page ? rem(62) : rem(48))};
`;

export default Advantages;
