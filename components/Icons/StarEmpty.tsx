import React from "react";
import styled from "styled-components";

type Props = {};

const StarEmpty = (props: Props) => {
  return (
    <StarEmptyIcon
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5" clipPath="url(#clip0_1740_4991)">
        <path
          d="M16.375 7.53333L12.3417 7.18333L10.7667 3.475C10.4833 2.8 9.51667 2.8 9.23333 3.475L7.65833 7.19167L3.63333 7.53333C2.9 7.59167 2.6 8.50833 3.15833 8.99167L6.21667 11.6417L5.3 15.575C5.13333 16.2917 5.90833 16.8583 6.54167 16.475L10 14.3917L13.4583 16.4833C14.0917 16.8667 14.8667 16.3 14.7 15.5833L13.7833 11.6417L16.8417 8.99167C17.4 8.50833 17.1083 7.59167 16.375 7.53333V7.53333ZM10 12.8333L6.86667 14.725L7.7 11.1583L4.93333 8.75833L8.58333 8.44167L10 5.08333L11.425 8.45L15.075 8.76667L12.3083 11.1667L13.1417 14.7333L10 12.8333Z"
          fill="#9095A9"
        />
      </g>
      <defs>
        <clipPath id="clip0_1740_4991">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </StarEmptyIcon>
  );
};

const StarEmptyIcon = styled.svg``;

export default StarEmpty;
