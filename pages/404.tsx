import type { NextPage } from "next";
import styled from "styled-components";
import { ContainerWrap } from "../components/Container";
import { rem } from "polished";
import Button from "../components/Button";
import { useRouter } from "next/router";

const NotFound: NextPage = () => {
  const router = useRouter();

  return (
    <NotFoundContainer>
      <NotFoundInner>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundSubtitle>Ничего не найдено</NotFoundSubtitle>
        <Button onClick={() => router.push({ pathname: "/" })}>
          Вернуться на главную
        </Button>
      </NotFoundInner>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled(ContainerWrap)`
  display: flex;
  flex-grow: 1;
  margin-top: calc(192 / 1440 * 100%);
  margin-bottom: ${rem(255)};
`;

const NotFoundInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const NotFoundTitle = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: ${rem(124)};
  line-height: ${rem(149)};
  color: ${(props) => props.theme.colors.grey.light};
`;

const NotFoundSubtitle = styled.p`
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: ${rem(19)};
  color: ${(props) => props.theme.colors.black};
  margin-bottom: ${rem(24)};
`;

export default NotFound;
