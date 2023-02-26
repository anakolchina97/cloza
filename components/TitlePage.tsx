import React from "react";
import styled from "styled-components";
import Breadcrumbs from "./Breadcrumbs";
import Container from "./Container";
import { rem } from "polished";

interface ITitlePage {
  title: string;
}

const TitlePage = ({ title }: ITitlePage) => {
  return (
    <TitlePageWrap>
      <Container>
        <TitlePageText>{title}</TitlePageText>
        <Breadcrumbs />
      </Container>
    </TitlePageWrap>
  );
};

const TitlePageWrap = styled.div`
  padding: ${rem(24)} 0;
  margin-top: ${rem(-32)};
  background: ${(props) => props.theme.colors.grey.light};
  margin-bottom: ${rem(32)};
`;

const TitlePageText = styled.p`
  font-weight: 700;
  font-size: ${rem(24)};
  line-height: ${rem(29)};
  color: ${(props) => props.theme.colors.black};
  margin-bottom: ${rem(8)};
`;

export default TitlePage;
