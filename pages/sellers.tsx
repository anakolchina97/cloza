import type { NextPage } from "next";
import Container from "../components/Container";
import TitlePage from "../components/TitlePage";
import styled from "styled-components";
import Alphabet from "../components/Alphabet";
import Search from "../components/Search";
import { rem } from "polished";
import FeaturedSeller from "../components/FeaturedSeller";

const Sellers: NextPage = () => {
  return (
    <SellersWrap>
      <TitlePage title="Все продавцы" />
      <Alphabet />
      <SellersSearch>
        <Search page={"intro"} placeholder={"Найти"} />
      </SellersSearch>
      <Container>
        <SellersCards>
          {Array(12)
            .fill(0)
            .map((index) => (
              <FeaturedSeller
                img="1"
                title="Евгений Ефремов"
                voices={375}
                key={index}
              />
            ))}
        </SellersCards>
      </Container>
    </SellersWrap>
  );
};

const SellersWrap = styled.main``;

const SellersSearch = styled.div`
  margin-top: ${rem(-29)};
  margin-bottom: ${rem(110)};
`;

const SellersCards = styled.div`
  display: grid;
  gap: ${rem(32)} ${rem(24)};
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: ${rem(164)};
`;

export default Sellers;
