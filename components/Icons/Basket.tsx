import React from "react";
import styled from "styled-components";

type Props = {};

const Basket = (props: Props) => {
  return (
    <BasketIcon
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1711_4399)">
        <path d="M10 7.49998C10.4584 7.49998 10.8334 7.12498 10.8334 6.66665V4.99998H12.5C12.9584 4.99998 13.3334 4.62498 13.3334 4.16665C13.3334 3.70831 12.9584 3.33331 12.5 3.33331H10.8334V1.66665C10.8334 1.20831 10.4584 0.833313 10 0.833313C9.54171 0.833313 9.16671 1.20831 9.16671 1.66665V3.33331H7.50004C7.04171 3.33331 6.66671 3.70831 6.66671 4.16665C6.66671 4.62498 7.04171 4.99998 7.50004 4.99998H9.16671V6.66665C9.16671 7.12498 9.54171 7.49998 10 7.49998ZM5.83337 15C4.91671 15 4.17504 15.75 4.17504 16.6666C4.17504 17.5833 4.91671 18.3333 5.83337 18.3333C6.75004 18.3333 7.50004 17.5833 7.50004 16.6666C7.50004 15.75 6.75004 15 5.83337 15ZM14.1667 15C13.25 15 12.5084 15.75 12.5084 16.6666C12.5084 17.5833 13.25 18.3333 14.1667 18.3333C15.0834 18.3333 15.8334 17.5833 15.8334 16.6666C15.8334 15.75 15.0834 15 14.1667 15ZM6.75004 10.8333H12.9584C13.5834 10.8333 14.1334 10.4916 14.4167 9.97498L17.2334 4.86665C17.4584 4.46665 17.3084 3.95831 16.9084 3.73331C16.5084 3.51665 16 3.65831 15.7834 4.05831L12.9584 9.16665H7.10837L3.78337 2.14165C3.65004 1.84998 3.35004 1.66665 3.03337 1.66665H1.66671C1.20837 1.66665 0.833374 2.04165 0.833374 2.49998C0.833374 2.95831 1.20837 3.33331 1.66671 3.33331H2.50004L5.50004 9.65831L4.37504 11.6916C3.76671 12.8083 4.56671 14.1666 5.83337 14.1666H15C15.4584 14.1666 15.8334 13.7916 15.8334 13.3333C15.8334 12.875 15.4584 12.5 15 12.5H5.83337L6.75004 10.8333Z" />
      </g>
      <defs>
        <clipPath id="clip0_1711_4399">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </BasketIcon>
  );
};

const BasketIcon = styled.svg`
  fill: ${(props) => props.theme.colors.black};
  &:hover {
    fill: ${(props) => props.theme.colors.purple};
  }
`;

export default Basket;