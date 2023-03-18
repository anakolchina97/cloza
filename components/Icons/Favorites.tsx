import React, { useState } from "react";
import styled from "styled-components";

type Props = {};

const Favorites = (props: Props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <FavoritesIcon
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => setIsActive(!isActive)}
    >
      <g clipPath="url(#clip0_1712_8832)">
        <FavoritesSVGFill
          active={isActive ? true : false}
          d="M11.125 16.775C10.4917 17.35 9.51667 17.35 8.88334 16.7667L8.79167 16.6833C4.41667 12.725 1.55834 10.1333 1.66667 6.9C1.71667 5.48333 2.44167 4.125 3.61667 3.325C5.81667 1.825 8.53334 2.525 10 4.24166C11.4667 2.525 14.1833 1.81666 16.3833 3.325C17.5583 4.125 18.2833 5.48333 18.3333 6.9C18.45 10.1333 15.5833 12.725 11.2083 16.7L11.125 16.775Z"
        />
      </g>
      <g opacity="0.5" clipPath="url(#clip1_1712_8832)">
        <FavoritesSVGStroke
          active={isActive ? true : false}
          d="M16.3833 3.325C14.1833 1.825 11.4666 2.525 9.99997 4.24166C8.53331 2.525 5.81664 1.81666 3.61664 3.325C2.44997 4.125 1.71664 5.475 1.66664 6.9C1.54997 10.1333 4.41664 12.725 8.79164 16.7L8.87497 16.775C9.50831 17.35 10.4833 17.35 11.1166 16.7667L11.2083 16.6833C15.5833 12.7167 18.4416 10.125 18.3333 6.89166C18.2833 5.475 17.55 4.125 16.3833 3.325V3.325ZM10.0833 15.4583L9.99997 15.5417L9.91664 15.4583C5.94997 11.8667 3.33331 9.49166 3.33331 7.08333C3.33331 5.41666 4.58331 4.16666 6.24997 4.16666C7.53331 4.16666 8.78331 4.99166 9.22497 6.13333H10.7833C11.2166 4.99166 12.4666 4.16666 13.75 4.16666C15.4166 4.16666 16.6666 5.41666 16.6666 7.08333C16.6666 9.49166 14.05 11.8667 10.0833 15.4583Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_1712_8832">
          <rect width="20" height="20" fill="white" />
        </clipPath>
        <clipPath id="clip1_1712_8832">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </FavoritesIcon>
  );
};

const FavoritesIcon = styled.svg``;

const FavoritesSVGFill = styled.path<{ active: boolean }>`
  fill: ${(props) =>
    props.active ? props.theme.colors.purple : "transparent"};
  ${FavoritesIcon}:hover & {
    fill: ${(props) => props.theme.colors.purple};
  }
`;

const FavoritesSVGStroke = styled.path<{ active: boolean }>`
  fill: ${(props) =>
    props.active ? "transparent" : props.theme.colors.gray.default};
  ${FavoritesIcon}:hover & {
    fill: transparent;
  }
`;

export default Favorites;
