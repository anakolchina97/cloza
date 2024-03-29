import React, { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import styled from "styled-components";
import { rem } from "polished";

export interface IAccordionProps {
  title?: string;
  isActive?: boolean;
  children?: React.ReactNode;
  filter?: string;
}

export const Accordion: React.FC<IAccordionProps> = ({
  title = "",
  isActive = false,
  children,
  filter,
}) => {
  const [isOpen, setIsOpen] = useState(isActive);
  const handleToggleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <AccordionWrap>
      <AccordionHeader onClick={handleToggleClick} filter={filter}>
        <AccordionTitle>{title}</AccordionTitle>
        <AccordionIcon isOpen={isOpen} />
      </AccordionHeader>
      <SlideDownWrap filter={filter}>
        <SlideDown>
          {isOpen && (
            <AccordionContent filter={filter}>{children}</AccordionContent>
          )}
        </SlideDown>
      </SlideDownWrap>
    </AccordionWrap>
  );
};

const AccordionWrap = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.gray.light};
`;

const AccordionTitle = styled.div`
  font-weight: 500;
  color: ${(props) => props.theme.colors.black};
`;

const AccordionContent = styled.div<{ filter?: string }>`
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: ${rem(19)};
  color: ${(props) => props.theme.colors.gray.default};
  padding: ${(props) => (props.filter ? `0 0 ${rem(15)}` : `${rem(24)} 0`)};
`;

const AccordionHeader = styled.div<{ filter?: string }>`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  gap: ${rem(49)};
  padding-bottom: ${(props) => (props.filter ? rem(32) : rem(24))};
  font-size: ${(props) => (props.filter ? rem(20) : rem(18))};
  line-height: ${(props) => (props.filter ? rem(24) : rem(22))};
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

const SlideDownWrap = styled.div<{ filter?: string }>`
  position: relative;
  top: ${rem(-10)};
`;
