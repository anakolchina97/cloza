import React, { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import styled from "styled-components";
import { rem } from "polished";

export interface IAccordionProps {
  title?: string;
  isActive?: boolean;
  children?: React.ReactNode;
}

export const Accordion: React.FC<IAccordionProps> = ({
  title = "",
  isActive = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(isActive);
  const handleToggleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <AccordionWrap>
      <AccordionHeader onClick={handleToggleClick}>
        <AccordionTitle>{title}</AccordionTitle>
        <AccordionIcon isOpen={isOpen} />
      </AccordionHeader>
      <SlideDown>
        {isOpen && <AccordionContent>{children}</AccordionContent>}
      </SlideDown>
    </AccordionWrap>
  );
};

const AccordionWrap = styled.div`
  border-bottom: 1px solid #eff0f2;
`;

const AccordionTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #121720;
`;

const AccordionContent = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #9095a9;
  padding: 24px 0;
`;

const AccordionHeader = styled.div`
  padding-bottom: 24px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  gap: ${rem(49)};
`;

const AccordionIcon = styled.i<{ isOpen: boolean }>`
  flex-shrink: 0;
  width: ${rem(24)};
  height: ${rem(24)};
  background: ${(props) => (props.isOpen ? "url(minus.svg)" : "url(plus.svg)")}
    no-repeat center center;
  display: block;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 500ms;
`;
