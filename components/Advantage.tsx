import React from "react";
import styled from "styled-components";
import { rem, rgba } from "polished";

interface IAdvantage {
  icon: string;
  title: string;
  page?: string;
  text: string;
}

const Advantage = ({ icon, title, text, page }: IAdvantage) => {
  return (
    <AdvantageWrap>
      <AdvantageIconBox>
        <AdvantageIcon icon={icon} />
      </AdvantageIconBox>
      <AdvantageTextBox>
        <AdvantageTitle
          dangerouslySetInnerHTML={{
            __html: title,
          }}
          page={page}
        ></AdvantageTitle>
        {page && <AdvantageText>{text}</AdvantageText>}
      </AdvantageTextBox>
    </AdvantageWrap>
  );
};

const AdvantageWrap = styled.div``;

const AdvantageIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${rem(124)};
  height: ${rem(124)};
  margin: 0 auto;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.gray.light};
  margin-bottom: ${rem(24)};
`;

const AdvantageTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};
`;

const AdvantageIcon = styled.i<{ icon: string }>`
  position: relative;
  display: block;
  width: ${rem(40)};
  height: ${rem(40)};
  background: ${(props) => `url(${props.icon}.svg)`} no-repeat center center;
  &::after {
    content: "";
    position: absolute;
    width: ${rem(40)};
    height: ${rem(40)};
    border-radius: 50%;
    left: ${rem(-8)};
    top: ${rem(8)};
    background: ${(props) => rgba(props.theme.colors.purple, 0.1)};
  }
`;

const AdvantageTitle = styled.p<{ page?: string }>`
  font-weight: 500;
  font-size: ${(props) => (props.page ? rem(20) : rem(18))};
  line-height: ${(props) => (props.page ? rem(24) : rem(22))};
  text-align: center;
  color: ${(props) => props.theme.colors.black};
`;

const AdvantageText = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.gray.default};
`;

export default Advantage;
