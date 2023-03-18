import React from "react";
import styled from "styled-components";
import { rem } from "polished";

export interface ITab {
  id: string | number;
  label?: string | number;
}

export interface ITabs {
  className?: string;
  selectedId: string | number;
  tabs: ITab[];
  onClick?: (id: string | number) => void;
}

export const Tabs: React.FC<ITabs> = ({
  className,
  selectedId,
  tabs,
  onClick,
}) => {
  return (
    <TabsWrap>
      <TabsHeader>
        {tabs &&
          tabs.map(({ id, label }) => (
            <TabsTab
              key={id}
              onClick={() => onClick?.(id)}
              active={id === selectedId ? true : false}
            >
              <TabsLabel active={id === selectedId ? true : false}>
                {label}
              </TabsLabel>
            </TabsTab>
          ))}
      </TabsHeader>
    </TabsWrap>
  );
};

const TabsWrap = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.gray.light};
  margin-bottom: ${rem(32)};
`;

const TabsHeader = styled.header`
  display: flex;
  gap: ${rem(32)};
`;

const TabsTab = styled.div<{ active: boolean }>`
  padding-bottom: ${rem(12)};
  border-bottom: 1px solid
    ${(props) => (props.active ? props.theme.colors.purple : "transparent")};
`;

const TabsLabel = styled.div<{ active: boolean }>`
  font-size: ${rem(16)};
  color: ${(props) =>
    props.active ? props.theme.colors.purple : props.theme.colors.black};
`;
