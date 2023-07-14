import { NextPage } from "next";
import React from "react";
import Container from "../components/Container";
import styled from "styled-components";
import Link from "next/link";

type Props = {};

const Sitemap: NextPage = (props: Props) => {
  return (
    <Container>
      <SitemapList>
        <SitemapItem>
          <SitemapLink href={"components"}>Компоненты</SitemapLink>
        </SitemapItem>
      </SitemapList>
    </Container>
  );
};

const SitemapList = styled.ol`
  list-style: decimal;
`;

const SitemapItem = styled.li``;

const SitemapLink = styled(Link)``;

export default Sitemap;
