import React from "react";
import styled from "styled-components";
import { rem, rgba } from "polished";

interface IAdvantage {
  icon: string;
  title: string;
}

const Advantage = ({ icon, title }: IAdvantage) => {
  return (
    <AdvantageWrap>
      <AdvantageIconBox>
        <AdvantageIcon icon={icon} />
      </AdvantageIconBox>
      <AdvantageTitle
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      ></AdvantageTitle>
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
  border: 1px solid ${(props) => props.theme.colors.grey.light};
  margin-bottom: ${rem(24)};
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

const AdvantageTitle = styled.p`
  font-weight: 500;
  font-size: ${rem(18)};
  line-height: ${rem(22)};
  text-align: center;
  color: ${(props) => props.theme.colors.black};
`;

export default Advantage;
