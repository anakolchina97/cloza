import type { NextPage } from "next";
import styled from "styled-components";
import Container, { ContainerWrap } from "../components/Container";
import { TitleH2 } from "../components/Title";
import { rem } from "polished";
import { TextItem } from "../components/Text";

const About: NextPage = () => {
  return (
    <AboutWrap>
      <AboutContainer>
        <AboutTitle>О компании</AboutTitle>
        <AboutText size={16} lineHeight={24} weight={400} color={"black"}>
          CLOZA – это маркетплейс одежды, агрегирующий в себе такие стили, как:
          streetwear, sportswear, casual, vintage sportswear, vintage
          sportswear, vintage casual, new vintage, new wave. Каждый пользователь
          нашего сервиса может выступать в роли продавца или покупателя.
        </AboutText>
        <AboutText size={16} lineHeight={24} weight={400} color={"black"}>
          Сталкивались с ситуацией, когда в вашем городе негде купить интересный
          стаф, все магазины продают плюс-минус одно и тоже, так еще и по
          неадекватным ценам? Задача CLOZA – это предоставить вам выбор
          интересных, брендовых вещей по адекватной цене, в которой можно пойти
          на тусовку, бар, вечеринку, работу и т.д. При этом мы тщательно следим
          за оригинальностью продукции и безопасностью для покупателей и
          продавцов.
        </AboutText>
      </AboutContainer>
    </AboutWrap>
  );
};

const AboutWrap = styled.main``;

const AboutContainer = styled(ContainerWrap)`
  margin-bottom: ${rem(98)};
`;

const AboutTitle = styled(TitleH2)`
  margin-bottom: ${rem(48)};
`;

const AboutText = styled(TextItem)`
  max-width: ${rem(752)};
  margin-bottom: ${rem(32)};
  &:last-child {
    margin-bottom: 0;
  }
`;

export default About;
