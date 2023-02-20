import React, { ReactNode } from "react";
import styled from "styled-components";
import { rem } from "polished";

interface IContainer {
  children: ReactNode;
}

const Container = ({ children }: IContainer) => {
  return <ContainerWrap>{children}</ContainerWrap>;
};

export const ContainerWrap = styled.div`
  max-width: ${rem(1140)};
  box-sizing: content-box;
  margin: 0 auto;
  padding: 0 ${rem(20)};
`;

export default Container;
