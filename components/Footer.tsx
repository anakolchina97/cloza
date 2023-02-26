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
          <FooterItem>
            <FooterTitle size={18} color="black" weight={500} lineHeight={22}>
              О нас
            </FooterTitle>
            <FooterLinks>
              <FooterLink href={"/man"} pathname={router.pathname}>
                <FooterLinkText>О компании</FooterLinkText>
              </FooterLink>
              <FooterLink href={"/woman"} pathname={router.pathname}>
                <FooterLinkText>Контакты</FooterLinkText>
              </FooterLink>
              <FooterLink href={"/faq"} pathname={router.pathname}>
                <FooterLinkText>FAQ</FooterLinkText>
              </FooterLink>
            </FooterLinks>
          </FooterItem>
          <FooterItem>
            <FooterTitle size={18} color="black" weight={500} lineHeight={22}>
              Мой аккаунт
            </FooterTitle>
            <FooterLinks>
              <FooterLink href={"/man"} pathname={router.pathname}>
                <FooterLinkText>Заказы</FooterLinkText>
              </FooterLink>
              <FooterLink href={"/woman"} pathname={router.pathname}>
                <FooterLinkText>Список желаний</FooterLinkText>
              </FooterLink>
              <FooterLink href={"/sex"} pathname={router.pathname}>
                <FooterLinkText>Войти</FooterLinkText>
              </FooterLink>
            </FooterLinks>
          </FooterItem>
          <FooterItem>
            <FooterTitle size={18} color="black" weight={500} lineHeight={22}>
              Сервис
            </FooterTitle>
            <FooterLinks>
              <FooterLink href={"/safe"} pathname={router.pathname}>
                <FooterLinkText>Безопасная сделка</FooterLinkText>
              </FooterLink>
              <FooterLink href={"/rules"} pathname={router.pathname}>
                <FooterLinkText>Правила оказания услуг</FooterLinkText>
              </FooterLink>
              <FooterLink href={"/sex"} pathname={router.pathname}>
                <FooterLinkText>Блог</FooterLinkText>
              </FooterLink>
            </FooterLinks>
          </FooterItem>
          <FooterItem>
            <FooterTel href="tel:+79105884455">+7 (910) 588-44-55</FooterTel>
            <FooterEmail href="mailto:duffs@mail.ru">duffs@mail.ru</FooterEmail>
            <FooterSocial>
              <FooterSocialItem icon={"vk"} href="#"></FooterSocialItem>
              <FooterSocialItem icon={"insta"} href="#"></FooterSocialItem>
            </FooterSocial>
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
  margin-top: auto;
  font-size: ${rem(16)};
  line-height: ${rem(19)};
  padding-top: ${rem(30)};
  border-top: 1px solid ${(props) => props.theme.colors.grey.light};
`;

const FooterInner = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: calc(119 / 1140 * 100%);
  padding-bottom: ${rem(33)};
  border-bottom: 1px solid ${(props) => props.theme.colors.grey.light};
  margin-bottom: ${rem(30)};
`;

const FooterItem = styled.div`
  &:first-child {
    min-width: ${rem(96)};
  }
`;

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
  white-space: nowrap;
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

const FooterTel = styled.a`
  display: inline-block;
  font-weight: 500;
  font-size: ${rem(18)};
  line-height: ${rem(22)};
  color: ${(props) => props.theme.colors.black};
  margin-bottom: ${rem(8)};
`;

const FooterEmail = styled.a`
  display: inline-block;
  font-weight: 500;
  font-size: ${rem(18)};
  line-height: ${rem(22)};
  color: ${(props) => props.theme.colors.purple};
  margin-bottom: ${rem(16)};
`;

const FooterSocial = styled.div`
  display: flex;
  gap: ${rem(12)};
`;

const FooterSocialItem = styled.a<{ icon: string }>`
  display: block;
  width: ${rem(24)};
  height: ${rem(24)};
  background: ${(props) => `url(${props.icon}-footer.svg)`} no-repeat center
    center;
`;

export default Footer;
