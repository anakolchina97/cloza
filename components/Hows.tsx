import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import How from "./How";

interface IHows {
  dataHows: {
    text: string;
  }[];
}

const Hows = ({ dataHows }: IHows) => {
  return (
    <HowsWrap>
      {dataHows.map(({ text }, index) => (
        <How text={text} index={index} key={index} />
      ))}
    </HowsWrap>
  );
};

const HowsWrap = styled.div`
  margin-bottom: ${rem(40)};
`;

export default Hows;
