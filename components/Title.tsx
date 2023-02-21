import React, { ReactNode } from "react";
import styled from "styled-components";
import { rem } from "polished";

interface ITitle {
  tag: "h1" | "h2" | "h3";
  children: ReactNode;
}

const Title = ({ tag, children }: ITitle) => {
  switch (tag) {
    case "h1":
      return <TitleH1>{children}</TitleH1>;
    case "h2":
      return <TitleH2>{children}</TitleH2>;
    case "h3":
      return <TitleH3>{children}</TitleH3>;
    default:
      return <></>;
  }
};

const TitleH1 = styled.h1``;

export const TitleH2 = styled.h2`
  font-weight: 700;
  font-size: ${rem(36)};
  line-height: ${rem(43)};
  color: ${(props) => props.theme.colors.black};
  margin-bottom: ${rem(48)};
`;

const TitleH3 = styled.h3``;

export default Title;
