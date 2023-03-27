import React from "react";
import styled from "styled-components";
import { TitleH2 } from "./Title";
import { rem } from "polished";
import Advantages from "./Advantages";

type Props = {};

const Why = (props: Props) => {
  const dataAdvantages = [
    {
      icon: "shopping",
      title: "Маркетплейс",
      text: "CLOZA - маркетплейс ресейла брендовой одежды",
    },
    {
      icon: "check-value",
      title: "Оригинал",
      text: "Мы следим за оригинальностью продаваемых вещей",
    },
    {
      icon: "filter",
      title: "Подбор",
      text: "Удобный подбор одежды по всем параметрам",
    },
    {
      icon: "dollar",
      title: "Безопасная сделка",
      text: "Безопасность платежей для покупателей и продавцов",
    },
  ];
  return (
    <WhyWrap>
      <WhyTitle>Почему выбирают нас?</WhyTitle>
      <Advantages page={"main"} dataAdvantages={dataAdvantages} />
    </WhyWrap>
  );
};

const WhyWrap = styled.section`
  margin-bottom: ${rem(60)};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray.light};
`;

const WhyTitle = styled(TitleH2)``;

const WhyCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${rem(24)};
`;

export default Why;
