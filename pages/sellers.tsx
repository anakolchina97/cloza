import type { NextPage } from "next";
import Container from "../components/Container";
import TitlePage from "../components/TitlePage";
import styled from "styled-components";
import Alphabet from "../components/Alphabet";
import { useState } from "react";

const Sellers: NextPage = () => {
  return (
    <SellersWrap>
      <TitlePage title="Все категории" />
      <Alphabet />
      <Container>1</Container>
    </SellersWrap>
  );
};

const SellersWrap = styled.main``;

export default Sellers;
