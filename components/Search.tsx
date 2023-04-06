import React from "react";
import styled from "styled-components";
import Container from "./Container";
import { rem } from "polished";
import Input from "./Input";
import SearchIcon from "./Icons/SearchIcon";
import SearchIconIntro from "./Icons/SearchIconIntro";

interface ISearch {
  page?: string;
  placeholder?: any;
}

const Search = ({ page, placeholder }: ISearch) => {
  return (
    <SearchWrap page={page}>
      <Container>
        <SearchInner page={page}>
          {page === "intro" ? <SearchIconIntro /> : <SearchIcon />}
          <SearchInputBox>
            <Input
              page={page}
              type="search"
              placeholder={
                page === "intro"
                  ? placeholder
                  : "Поиск товара, бренда или продавца...".repeat(10)
              }
            />
          </SearchInputBox>
        </SearchInner>
      </Container>
    </SearchWrap>
  );
};

const SearchWrap = styled.div<{ page?: string }>`
  background: ${(props) =>
    props.page === "intro" ? "transparent" : props.theme.colors.black};
  margin-bottom: ${rem(32)};
`;

const SearchInner = styled.div<{ page?: string }>`
  display: flex;
  align-items: center;
  gap: ${rem(12)};
  height: ${rem(60)};
  padding: ${(props) =>
    props.page === "intro" ? `${rem(18)} 0 ${rem(0)}` : `${rem(18)} 0`};
  border-bottom: ${(props) =>
    props.page === "intro"
      ? `1px solid ${props.theme.colors.gray.light}`
      : "none"};
`;

const SearchInputBox = styled.div`
  width: 100%;
  overflow: hidden;
`;

export default Search;
