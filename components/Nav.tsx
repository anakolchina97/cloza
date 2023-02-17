import React from "react";
import styled from "styled-components";
import Container from "./Container";
import { rem } from "polished";
import Menu from "./Menu";
import Link from "next/link";

const Nav = () => {
  return (
    <NavWrap>
      <Container>
        <NavInner>
          <NavLogoWrap>
            <Link href={"/"}>
              <NavLogo src="./logo.svg" />
            </Link>
          </NavLogoWrap>
          <Menu />
        </NavInner>
      </Container>
    </NavWrap>
  );
};

const NavWrap = styled.nav``;

const NavInner = styled.div`
  height: ${rem(95)};
  display: flex;
  align-items: center;
`;

const NavLogoWrap = styled.div`
  margin-right: ${rem(48)};
`;

const NavLogo = styled.img`
  width: ${rem(136)};
`;

export default Nav;
