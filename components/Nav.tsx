import React from "react";
import styled from "styled-components";
import Menu from "./Menu";

const Nav = () => {
  return (
    <NavWrap>
      <Menu />
    </NavWrap>
  );
};

const NavWrap = styled.nav``;

export default Nav;
