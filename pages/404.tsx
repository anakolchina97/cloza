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
  height: 100vh;
  min-height: ${rem(595)};
  margin-top: ${rem(-32)};
  @media (max-width: 1440px) {
    min-height: ${rem(400)};
  }
`;

const NotFoundInner = styled.div`
  margin: auto;
  text-align: center;
`;

const NotFoundTitle = styled.h1`
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
