import type { NextPage } from "next";
import styled from "styled-components";
import Container from "../components/Container";
import { TitleH2 } from "../components/Title";
import { rem } from "polished";

const Rules: NextPage = () => {
  return (
    <RulesWrap>
      <Container>
        <RulesTitle>Правила пользования</RulesTitle>
        <RulesInner>
          <RulesText>
            Разрешенные стили одежды для публикации streetwear, sportswear,
            casual, vintage sportswear, vintage casual, new vintage, new wave
          </RulesText>
          <RulesText weight={500}>
            Список товаров, запрещенных к публикации:
          </RulesText>
          <RulesUl>
            <RulesLi>
              Классика (костюмы, брюки, туфли, пиджаки, галстуки, бабочки)
            </RulesLi>
            <RulesLi>
              Платья, вечерние платья (если они не относятся к стилям, описанным
              выше)
            </RulesLi>
            <RulesLi>Нижнее белье (мужское и женское)</RulesLi>
          </RulesUl>
          <RulesUl>
            <RulesLi>
              Товары с фото низкого качества (
              <RulesLiA
                href="http://prntscr.com/skkq4n http://prntscr.com/skl11x"
                target={"_blank"}
              >
                http://prntscr.com/skkcya
              </RulesLiA>
              )
            </RulesLi>
            <RulesLi>
              Товары низкого качества (
              <RulesLiA
                href="http://prntscr.com/skkq4n http://prntscr.com/skl11x"
                target={"_blank"}
              >
                http://prntscr.com/skkq4n http://prntscr.com/skl11x
              </RulesLiA>
              )
            </RulesLi>
            <RulesLi>Новые товары из магазинов с no name брендами</RulesLi>
          </RulesUl>
          <RulesUl>
            <RulesLi>
              Запрещены подделки любого вида/уровня. За&nbsp;постинг подделок -{" "}
              <strong>бан всего аккаунта.</strong>
            </RulesLi>
          </RulesUl>
        </RulesInner>
      </Container>
    </RulesWrap>
  );
};

const RulesWrap = styled.main`
  margin-bottom: ${rem(115)};
`;

const RulesInner = styled.div`
  max-width: ${rem(752)};
`;

const RulesTitle = styled(TitleH2)``;

const RulesText = styled.p<{ weight?: number }>`
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: ${rem(24)};
  margin-bottom: ${rem(24)};
  font-weight: ${(props) => props.weight};
`;

const RulesUl = styled.ul`
  padding-top: ${rem(2)};
  margin-bottom: ${rem(25)};
`;

const RulesLi = styled.li`
  position: relative;
  display: block;
  padding-left: ${rem(10)};
  margin-bottom: ${rem(6)};
  &::before {
    content: "-";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const RulesLiA = styled.a`
  color: ${(props) => props.theme.colors.purple};
`;

export default Rules;
