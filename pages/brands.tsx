import type { NextPage } from "next";
import styled from "styled-components";
import Container from "../components/Container";
import TitlePage from "../components/TitlePage";

const Brands: NextPage = () => {
  return (
    <BrandsWrap>
      <TitlePage title="Все бренды" />
      <Container>Brands</Container>
    </BrandsWrap>
  );
};

const BrandsWrap = styled.div``;

export default Brands;
