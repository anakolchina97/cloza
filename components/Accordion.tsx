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
  border-bottom: 1px solid ${(props) => props.theme.colors.grey.light};
`;

const AccordionTitle = styled.div`
  font-weight: 500;
  font-size: ${rem(18)};
  line-height: ${rem(22)};
  color: ${(props) => props.theme.colors.black};
`;

const AccordionContent = styled.div`
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: ${rem(19)};
  color: ${(props) => props.theme.colors.grey.default};
  padding: ${rem(24)} 0;
`;

const AccordionHeader = styled.div`
  cursor: pointer;
  padding-bottom: ${rem(24)};
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
