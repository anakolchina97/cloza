import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Advantage from "./Advantage";

// TODO: разобраться и определить правильный тип
interface IAdvantages {
  dataAdvantages: any;
}

interface IAdvantage {
  icon: string;
  title: string;
}

const Advantages = ({ dataAdvantages }: IAdvantages) => {
  return (
    <AdvantagesWrap>
      {dataAdvantages.map(({ title, icon }: IAdvantage) => (
        <Advantage title={title} icon={icon} key={title} />
      ))}
    </AdvantagesWrap>
  );
};

const AdvantagesWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${rem(24)};
  margin-bottom: ${rem(48)};
`;

export default Advantages;
