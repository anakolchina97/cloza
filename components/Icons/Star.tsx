import React from "react";
import styled from "styled-components";

type Props = {};

const Star = (props: Props) => {
  return (
    <StarIcon
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1740_5066)">
        <path
          d="M10.0001 14.3916L13.4584 16.4833C14.0917 16.8666 14.8667 16.3 14.7001 15.5833L13.7834 11.65L16.8417 8.99997C17.4001 8.51663 17.1001 7.59997 16.3667 7.54163L12.3417 7.19997L10.7667 3.4833C10.4834 2.8083 9.51673 2.8083 9.23339 3.4833L7.65839 7.19163L3.63339 7.5333C2.90006 7.59163 2.60006 8.5083 3.15839 8.99163L6.21673 11.6416L5.30006 15.575C5.13339 16.2916 5.90839 16.8583 6.54173 16.475L10.0001 14.3916Z"
          fill="#7984C0"
        />
      </g>
      <defs>
        <clipPath id="clip0_1740_5066">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </StarIcon>
  );
};

const StarIcon = styled.svg`
  fill: ${(props) => props.theme.colors.purple};
`;

export default Star;
