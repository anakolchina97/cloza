import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import Container from "../components/Container";
import TitlePage from "../components/TitlePage";
import { rem } from "polished";
import { Accordion } from "../components/Accordion";

const Categories: NextPage = () => {
  const product = [
    {
      img: "./product.png",
      title: "Футболки",
    },
    {
      img: "./product.png",
      title: "Футболки",
    },
    {
      img: "./product.png",
      title: "Футболки",
    },
    {
      img: "./product.png",
      title: "Футболки",
    },
    {
      img: "./product.png",
      title: "Футболки",
    },
    {
      img: "./product.png",
      title: "Футболки",
    },
    {
      img: "./product.png",
      title: "Футболки",
    },
    {
      img: "./product.png",
      title: "Футболки",
    },
    {
      img: "./product.png",
      title: "Футболки",
    },
    {
      img: "./product.png",
      title: "Футболки",
    },
    {
      img: "./product.png",
      title: "Футболки",
    },
    {
      img: "./product.png",
      title: "Футболки",
    },
  ];
  return (
    <CategoriesWrap>
      <TitlePage title="Все категории" />
      <Container>
        <CategoriesInner>
          <CategoriesCards>
            {product.map(({ img, title }, index) => (
              <CategoriesCard href={"/"} key={index}>
                <CategoriesCardImg src={img} />
                <CategoriesCardFooter>
                  <CategoriesCardName>{title}</CategoriesCardName>
                  <CategoriesCardIcon />
                </CategoriesCardFooter>
              </CategoriesCard>
            ))}
          </CategoriesCards>
          <CategoriesFilter>
            <Accordion title="Мужское" isActive filter="true">
              <CategoriesFilterList>
                <CategoriesFilterListItem>
                  <CategoriesFilterListLink href={"/"}>
                    Верх
                  </CategoriesFilterListLink>
                </CategoriesFilterListItem>
                <CategoriesFilterListItem>
                  <CategoriesFilterListLink href={"/"}>
                    Низ
                  </CategoriesFilterListLink>
                </CategoriesFilterListItem>
                <CategoriesFilterListItem>
                  <CategoriesFilterListLink href={"/"}>
                    Обувь
                  </CategoriesFilterListLink>
                </CategoriesFilterListItem>
                <CategoriesFilterListItem>
                  <CategoriesFilterListLink href={"/"}>
                    Аксессуары
                  </CategoriesFilterListLink>
                </CategoriesFilterListItem>
              </CategoriesFilterList>
            </Accordion>
            <Accordion title="Женское" filter="true">
              <CategoriesFilterList>
                <CategoriesFilterListItem>
                  <CategoriesFilterListLink href={"/"}>
                    Верх
                  </CategoriesFilterListLink>
                </CategoriesFilterListItem>
                <CategoriesFilterListItem>
                  <CategoriesFilterListLink href={"/"}>
                    Низ
                  </CategoriesFilterListLink>
                </CategoriesFilterListItem>
                <CategoriesFilterListItem>
                  <CategoriesFilterListLink href={"/"}>
                    Обувь
                  </CategoriesFilterListLink>
                </CategoriesFilterListItem>
                <CategoriesFilterListItem>
                  <CategoriesFilterListLink href={"/"}>
                    Аксессуары
                  </CategoriesFilterListLink>
                </CategoriesFilterListItem>
              </CategoriesFilterList>
            </Accordion>
            <Accordion title="Унисекс" filter="true">
              <CategoriesFilterList>
                <CategoriesFilterListItem>
                  <CategoriesFilterListLink href={"/"}>
                    Верх
                  </CategoriesFilterListLink>
                </CategoriesFilterListItem>
                <CategoriesFilterListItem>
                  <CategoriesFilterListLink href={"/"}>
                    Низ
                  </CategoriesFilterListLink>
                </CategoriesFilterListItem>
                <CategoriesFilterListItem>
                  <CategoriesFilterListLink href={"/"}>
                    Обувь
                  </CategoriesFilterListLink>
                </CategoriesFilterListItem>
                <CategoriesFilterListItem>
                  <CategoriesFilterListLink href={"/"}>
                    Аксессуары
                  </CategoriesFilterListLink>
                </CategoriesFilterListItem>
              </CategoriesFilterList>
            </Accordion>
          </CategoriesFilter>
        </CategoriesInner>
      </Container>
    </CategoriesWrap>
  );
};

const CategoriesWrap = styled.main`
  margin-bottom: ${rem(30)};
`;

const CategoriesInner = styled.div`
  display: flex;
  gap: ${rem(24)};
  align-items: flex-start;
`;

const CategoriesCards = styled.div`
  margin-bottom: ${rem(32)};
  width: calc(849 / 1140 * 100%);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${rem(267)}, 1fr));
  gap: ${rem(30)} ${rem(24)};
`;

const CategoriesFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(32)};
  width: calc(267 / 1140 * 100%);
`;

const CategoriesCard = styled(Link)``;

const CategoriesCardImg = styled.img`
  border-radius: ${rem(16)};
  margin-bottom: ${rem(14)};
  width: 100%;
`;

const CategoriesCardFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CategoriesCardName = styled.p`
  font-weight: 500;
  font-size: ${rem(20)};
  line-height: ${rem(24)};
  color: ${(props) => props.theme.colors.black};
`;

const CategoriesCardIcon = styled.i`
  display: block;
  width: ${rem(20)};
  height: ${rem(20)};
  background: url("arrow-right.svg") no-repeat center center;
`;

const CategoriesFilterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};
  padding-bottom: ${rem(9)};
  /* margin-top: ${rem(-32)}; */
`;

const CategoriesFilterListItem = styled.li``;

const CategoriesFilterListLink = styled(Link)`
  font-weight: 500;
  font-size: ${rem(16)};
  line-height: ${rem(19)};
  color: ${(props) => props.theme.colors.black};
`;

export default Categories;
