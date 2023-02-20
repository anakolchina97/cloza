import React from "react";
import styled from "styled-components";
import Container from "./Container";
import { TextItem } from "./Text";
import { rem } from "polished";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  return (
    <FooterWrap>
      <Container>
        <FooterInner>
          <FooterItem>
            <FooterTitle size={18} color="black" weight={500} lineHeight={22}>
              Категории
            </FooterTitle>
            <FooterLinks>
              <FooterLink href={"/man"} pathname={router.pathname}>
                <FooterLinkText>Мужское</FooterLinkText>
              </FooterLink>
              <FooterLink href={"/woman"} pathname={router.pathname}>
                <FooterLinkText>Женское</FooterLinkText>
              </FooterLink>
              <FooterLink href={"/sex"} pathname={router.pathname}>
                <FooterLinkText>Унисекс</FooterLinkText>
              </FooterLink>
            </FooterLinks>
          </FooterItem>
        </FooterInner>
        <FooterInfo>
          <FooterInfoItem>
            <FooterInfoLink href={"/"}>
              Пользовательское соглашение
            </FooterInfoLink>{" "}
            и{" "}
            <FooterInfoLink href={"/"}>
              политика конфиденциальности
            </FooterInfoLink>
          </FooterInfoItem>
          <FooterInfoItem>&copy;CLOZA 2021. Все права защищены</FooterInfoItem>
        </FooterInfo>
      </Container>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  font-size: ${rem(16)};
  line-height: ${rem(19)};
  padding-top: ${rem(30)};
  border-top: 1px solid ${(props) => props.theme.colors.grey.light};
`;

const FooterInner = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-bottom: ${rem(33)};
  border-bottom: 1px solid ${(props) => props.theme.colors.grey.light};
  margin-bottom: ${rem(30)};
`;

const FooterItem = styled.div``;

const FooterTitle = styled(TextItem)`
  margin-bottom: ${rem(24)};
`;

const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${rem(12)};
`;

const FooterLink = styled(Link)<{ pathname: string }>`
  color: ${(props) =>
    props.href === props.pathname
      ? props.theme.colors.purple
      : props.theme.colors.grey.default};
`;

const FooterLinkText = styled.span`
  font-weight: 500;
`;

const FooterInfo = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(2, auto);
  gap: ${rem(40)};
  margin-bottom: ${rem(32)};
`;

const FooterInfoItem = styled.p`
  font-weight: 400;
  color: ${(props) => props.theme.colors.grey.default};
`;

const FooterInfoLink = styled(Link)`
  color: ${(props) => props.theme.colors.purple};
  font-weight: 500;
  font-size: ${rem(16)};
  line-height: ${rem(19)};
`;

export default Footer;
