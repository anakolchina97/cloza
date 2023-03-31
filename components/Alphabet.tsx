import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";
import { rem } from "polished";

type Props = {};

const Alphabet = (props: Props) => {
  const [activeId, setActiveId] = useState<any>();

  const ARR_RU = [
    "а",
    "б",
    "в",
    "г",
    "д",
    "е",
    "ё",
    "ж",
    "з",
    "и",
    "й",
    "к",
    "л",
    "м",
    "н",
    "о",
    "п",
    "р",
    "с",
    "т",
    "у",
    "ф",
    "х",
    "ц",
    "ч",
    "ш",
    "щ",
    "э",
    "ю",
    "я",
  ];

  const letters = ARR_RU.map((item, index) => {
    return {
      id: index,
      letter: item,
    };
  });

  return (
    <AlphabetWrap>
      <Container>
        {letters.map(({ id, letter }) => (
          <AlphabetLetter
            onClick={() => setActiveId(id)}
            key={id}
            active={activeId === id && true}
          >
            {letter}
          </AlphabetLetter>
        ))}
      </Container>
    </AlphabetWrap>
  );
};

const AlphabetWrap = styled.div`
  margin-top: ${rem(-32)};
  margin-bottom: ${rem(32)};
  padding: ${rem(20)} 0;
  background: ${(props) => props.theme.colors.gray.white};
`;

const AlphabetLetter = styled.p<{ active: boolean }>`
  cursor: pointer;
  display: inline-block;
  text-transform: uppercase;
  font-size: ${rem(14)};
  line-height: ${rem(17)};
  font-weight: ${(props) => (props.active ? 700 : 400)};
  color: ${(props) =>
    props.active
      ? props.theme.colors.gray.black
      : props.theme.colors.gray.default};
  padding: 0 ${rem(12)};
  border-right: 1px solid ${(props) => props.theme.colors.gray.light};
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
    border-right: none;
  }
`;

export default Alphabet;
