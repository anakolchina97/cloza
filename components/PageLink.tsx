import Link from "next/link";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface IPageLink {
  children?: ReactNode;
  href?: string;
}

const PageLink = ({ href = "", children }: IPageLink) => {
  return <PageLinkWrap href={href}>{children}</PageLinkWrap>;
};

const PageLinkWrap = styled(Link)`
  font-weight: 500;
  color: ${(props) => props.theme.colors.purple};
`;

export default PageLink;
