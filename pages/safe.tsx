import type { NextPage } from "next";
import styled from "styled-components";
import Container from "../components/Container";
import { TitleH2 } from "../components/Title";
import { rem } from "polished";
import { TextItem } from "../components/Text";
import Advantages from "../components/Advantages";
import Benefits from "../components/Benefits";
import Hows from "../components/Hows";

const Safe: NextPage = () => {
  const dataAdvantages = [
    {
      icon: "any-amount",
      title: "Защита сделок на <br> любую сумму",
    },
    {
      icon: "wallet",
      title: "Возврат денег при невыполнении заказа",
    },
    {
      icon: "unlock",
      title: "Исключение <br> мошенничества",
    },
    {
      icon: "time",
      title: "Оперативное разрешение <br> споров",
    },
  ];

  const dataBenefits = [
    {
      title: "Покупателям",
      text: "Если продавец нарушает условия сделки, гарант-сервис CloudPayments.ru возвращает средства покупателю на&nbsp;карту, с&nbsp;которой была проведена оплата.",
    },
    {
      title: "Продавцам",
      text: "Продавец гарантированно получит денежные средства, при своевременной отправке необходимого заказа.",
    },
  ];

  const dataHows = [
    {
      text: "Покупатель выбирает подходящий товар",
    },
    {
      text: "Покупатель выбирает способ доставки, который предоставляет продавец, оплачивает товар через безопасную сделку (оплачивает 7% комиссии), деньги поступают на безопасный счёт CloudPayments.ru.",
    },
    {
      text: "Продавец получает заказ, если товар в наличии, продавец отправляет его покупателю. Если товара нет в наличии, продавец отменяет заказ, деньги возвращаются покупателю (за вычетом 3.9% комиссии)",
    },
    {
      text: "Покупатель принимает и проверяет товар, нажимает кнопку подтверждения получения заказа в личном кабинете",
    },
    {
      text: "CloudPayments.ru переводит деньги продавцу (за вычетом 7% комиссии)",
    },
  ];

  return (
    <SafeWrap>
      <Container>
        <SafeTitle>Покупайте и продавайте товары без рисков</SafeTitle>
        <SafeText size={18} lineHeight={24} weight={400} color="black">
          Безопасная сделка гарантирует 100% предоплату, которая хранится
          на&nbsp;счёте гаранта CloudPayments.ru, пока продавец не&nbsp;отправит
          оплаченный заказ, а&nbsp;покупатель не&nbsp;получит товар.
        </SafeText>
        <Advantages dataAdvantages={dataAdvantages} />
        <SafeInfo>
          Безопасность обработки Интернет-платежей гарантирует ООО
          &laquo;КлаудПэйментс&raquo;. Процессинговый центр CloudPayments
          защищает и&nbsp;обрабатывает данные Вашей банковской карты
          по&nbsp;стандарту безопасности PCI&nbsp;DSS 3.2. Передача информации
          в&nbsp;платежный шлюз происходит с&nbsp;применением технологии
          шифрования SSL. Дальнейшая передача информации происходит
          по&nbsp;закрытым банковским сетям, имеющим наивысший уровень
          надежности. CloudPayments не&nbsp;передает данные Вашей карты нам
          и&nbsp;иным третьим лицам. Для дополнительной аутентификации держателя
          карты используется протокол 3D&nbsp;Secure.
        </SafeInfo>
        <SafeTitle>Кому это выгодно?</SafeTitle>
        <Benefits dataBenefits={dataBenefits} />
        <SafeTitle>Как это работает?</SafeTitle>
        <Hows dataHows={dataHows} />
      </Container>
    </SafeWrap>
  );
};

const SafeWrap = styled.main``;

const SafeTitle = styled(TitleH2)`
  max-width: ${rem(558)};
`;

const SafeText = styled(TextItem)`
  margin-bottom: ${rem(48)};
  max-width: 100%;
`;

const SafeInfo = styled.p`
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: 138%;
  color: ${(props) => props.theme.colors.grey.default};
  padding-bottom: ${rem(64)};
  margin-bottom: ${rem(64)};
  border-bottom: 1px solid ${(props) => props.theme.colors.grey.light};
`;

export default Safe;
