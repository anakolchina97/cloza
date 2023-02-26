import React from "react";
import styled from "styled-components";
import Container from "./Container";
import { rem } from "polished";
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <HeaderWrap>
      <Container>
        <HeaderInner>
          <HeaderLogoWrap href={"/"}>
            <HeaderLogo src="./logo.svg" />
          </HeaderLogoWrap>
          <Nav />
        </HeaderInner>
      </Container>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header``;

const HeaderInner = styled.div`
  height: ${rem(95)};
  display: flex;
  align-items: center;
`;

const HeaderLogoWrap = styled(Link)`
  margin-right: ${rem(48)};
`;

const HeaderLogo = styled.img`
  width: ${rem(136)};
`;

export default Header;
