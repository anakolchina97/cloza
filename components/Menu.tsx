import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import { rem } from "polished";
import { useRouter } from "next/router";

const Menu = () => {
  const router = useRouter();

  const items = [
    {
      name: "Мужское",
      page: "/man",
    },
    {
      name: "Женское",
      page: "/woman",
    },
    {
      name: "Унисекс",
      page: "/sex",
    },
    {
      name: "Sale",
      page: "/sale",
    },
    {
      name: "FAQ",
      page: "/faq",
    },
    {
      name: "Безопасная сделка",
      page: "/safe",
    },
    {
      name: "Правила пользования",
      page: "/rules",
    },
  ];

  return (
    <MenuWrap>
      {items.map(({ name, page }) => (
        <MenuItem key={name}>
          <MenuLink href={page} pathname={router.pathname}>
            {name}
          </MenuLink>
        </MenuItem>
      ))}
    </MenuWrap>
  );
};

const MenuWrap = styled.ul`
  display: flex;
  gap: ${rem(22)};
`;

const MenuItem = styled.li``;

const MenuLink = styled(Link)<{ pathname: string }>`
  font-weight: 500;
  font-size: ${rem(16)};
  line-height: ${rem(19)};
  text-decoration: ${(props) =>
    props.href === props.pathname ? "underline" : "none"};
`;

export default Menu;
