import type { NextPage } from "next";
import styled from "styled-components";
import Container, { ContainerWrap } from "../components/Container";
import { TitleH2 } from "../components/Title";
import { rem } from "polished";
import Text from "../components/Text";
import { Accordion } from "../components/Accordion";

const Faq: NextPage = () => {
  return (
    <FaqWrap>
      <Container>
        <FaqInner>
          <FaqTitle>FAQ</FaqTitle>
          <Accordion
            title="В посылке пришел не мой заказ (любая другая вещь, которую я не заказывал), что делать?"
            isActive
          >
            Для начала свяжитесь с нами (обратная связь, сообщение в паблике).
            Для разрешения ситуации - необходимо предоставить фото распаковки
            товара на почте. Именно эти данные будут запрашиваться у обеих
            сторон спора.
          </Accordion>
        </FaqInner>
      </Container>
    </FaqWrap>
  );
};

const FaqWrap = styled.div`
  margin-bottom: ${rem(32)};
`;

const FaqInner = styled.div``;

const FaqTitle = styled(TitleH2)``;

export default Faq;
