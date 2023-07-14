import { NextPage } from "next";
import React from "react";
import Container from "../components/Container";
import Title from "../components/Title";
import Button from "../components/Button";
import styled from "styled-components";
import Arrow from "../components/Icons/Arrow";
import Basket from "../components/Icons/Basket";

type Props = {};

const Components: NextPage = (props: Props) => {
  return (
    <Container>
      <ComponentsList>
        <ComponentsItem>
          <Title tag="h3">Иконки</Title>
          <ComponentsFlexWrapper>
            <Arrow />
            <Basket />
          </ComponentsFlexWrapper>
        </ComponentsItem>
        <ComponentsItem>
          <Title tag="h3">Кнопки</Title>
          <ComponentsFlexWrapper>
            <Button>Кнопка</Button>
            <Button arrow>Кнопка</Button>
          </ComponentsFlexWrapper>
        </ComponentsItem>
      </ComponentsList>
    </Container>
  );
};

const ComponentsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ComponentsItem = styled.li`
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
`;

const ComponentsFlexWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export default Components;
