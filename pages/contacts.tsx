import type { NextPage } from "next";
import styled from "styled-components";
import Container from "../components/Container";
import { TitleH2 } from "../components/Title";
import { rem } from "polished";
import { TextItem } from "../components/Text";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Button from "../components/Button";

const Contacts: NextPage = () => {
  return (
    <ContactsWrap>
      <Container>
        <ContactsTitle>Контакты</ContactsTitle>
        <ContactsText size={16} weight={400} color="black" lineHeight={19}>
          Qui officia deserunt mollit anim id est labrum. Duis aute irret dolor
          derit into voludptate velit esse.
        </ContactsText>
        <ContactsInner>
          <ContactsLeft>
            <ContactsItem>
              <ContactsTextBig
                size={24}
                weight={700}
                color="black"
                lineHeight={29}
              >
                Контактные данные
              </ContactsTextBig>
              <ContactsTextSmall>ИП Седнин Никита Сергеевич,</ContactsTextSmall>
              <ContactsTextSmall>
                ИНН 711613495293, ОГРНИП 320715400016540
              </ContactsTextSmall>
              <ContactsTextSmall>
                Адрес: 301657, г. Новомосковск, ул. Школьная, дом 17.
              </ContactsTextSmall>
              <ContactsTextSmall>
                Адрес для корреспонденции: г. Москва, ул. Домодедовская, дом 20
                к2
              </ContactsTextSmall>
            </ContactsItem>
            <ContactsItem>
              <ContactsTextBig
                size={24}
                weight={700}
                color="black"
                lineHeight={29}
              >
                Telegram, Whatsapp, E-mail
              </ContactsTextBig>
              <ContactsPhone href="tel:+79105884455">
                +7(910)588 44 55
              </ContactsPhone>
              <ContactsPhone color="#7984C0" href="mailto:duffs@mail.ru">
                Duffs@mail.ru
              </ContactsPhone>
            </ContactsItem>
            <ContactsItem>
              <ContactsTextBig
                size={24}
                weight={700}
                color="black"
                lineHeight={29}
              >
                Работа службы поддержки
              </ContactsTextBig>
              <ContactsTextSmall>7 дней в неделю</ContactsTextSmall>
              <ContactsTextSmall>с 10:00 до 21:00</ContactsTextSmall>
            </ContactsItem>
            <ContactsItem>
              <ContactsTextBig
                size={24}
                weight={700}
                color="black"
                lineHeight={29}
              >
                Социальные сети
              </ContactsTextBig>
              <ContactsSocials>
                <ContactsSocial href="#" icon="vk"></ContactsSocial>
                <ContactsSocial href="#" icon="insta"></ContactsSocial>
              </ContactsSocials>
            </ContactsItem>
          </ContactsLeft>
          <ContactsRight>
            <ContactsTextBig
              size={24}
              weight={700}
              color="black"
              lineHeight={29}
            >
              Контактные данные
            </ContactsTextBig>
            <ContactsField>
              <Input
                type="text"
                label="Имя"
                isLabel={true}
                placeholder={"Имя"}
              />
            </ContactsField>
            <ContactsField>
              <Input
                type="email"
                label="E-mail"
                isLabel={true}
                placeholder={"E-mail"}
              />
            </ContactsField>
            <ContactsField>
              <Textarea
                label="Сообщение"
                isLabel={true}
                placeholder="Сообщение"
              />
            </ContactsField>
            <Button>Отправить</Button>
          </ContactsRight>
        </ContactsInner>
      </Container>
    </ContactsWrap>
  );
};

const ContactsWrap = styled.div`
  margin-bottom: ${rem(20)};
`;

const ContactsInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${rem(24)};
`;

const ContactsTitle = styled(TitleH2)``;

const ContactsTextBig = styled(TextItem)``;

const ContactsTextSmall = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: ${rem(19)};
  margin-bottom: ${rem(16)};
`;

const ContactsText = styled(TextItem)`
  max-width: ${rem(558)};
  margin-bottom: ${rem(64)};
`;

const ContactsLeft = styled.div``;

const ContactsRight = styled.div``;

const ContactsPhone = styled.a<{ color?: string }>`
  font-style: normal;
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: ${rem(19)};
  margin-bottom: ${rem(16)};
  color: ${(props) => props.color};
  display: block;
`;

const ContactsItem = styled.div`
  margin-bottom: ${rem(48)};
`;

const ContactsSocials = styled.div`
  display: flex;
  gap: ${rem(16)};
`;

const ContactsSocial = styled.a<{ icon: string }>`
  width: ${rem(48)};
  height: ${rem(48)};
  background: #7984c0 ${(props) => `url(${props.icon}.svg)`} no-repeat center
    center;
  border-radius: ${rem(12)};
`;

const ContactsField = styled.div`
  margin-bottom: ${rem(15)};
  &:last-of-type {
    margin-bottom: ${rem(26)};
  }
`;

export default Contacts;
