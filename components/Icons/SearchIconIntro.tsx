import React from "react";
import styled from "styled-components";

type Props = {};

const SearchIconIntro = (props: Props) => {
  return (
    <SearchIconIntroWrap
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5" clipPath="url(#clip0_271_7735)">
        <path
          d="M17.7603 16.6033L12.1816 11.0246C13.0928 9.86515 13.637 8.4042 13.637 6.81851C13.637 3.05875 10.5782 0 6.81845 0C3.05875 0 0 3.05875 0 6.81845C0 10.5782 3.05875 13.6369 6.81845 13.6369C8.40409 13.6369 9.86509 13.0928 11.0245 12.1816L16.6033 17.7603C16.763 17.9201 16.9724 18 17.1818 18C17.3912 18 17.6006 17.9201 17.7603 17.7603C18.0799 17.4409 18.0799 16.9228 17.7603 16.6033ZM1.63636 6.81845C1.63636 3.96104 3.96104 1.63636 6.81845 1.63636C9.67587 1.63636 12.0006 3.96104 12.0006 6.81845C12.0006 9.67587 9.67587 12.0005 6.81845 12.0005C3.96104 12.0005 1.63636 9.67587 1.63636 6.81845Z"
          fill="#9095A9"
        />
      </g>
      <defs>
        <clipPath id="clip0_271_7735">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </SearchIconIntroWrap>
  );
};

const SearchIconIntroWrap = styled.svg``;

export default SearchIconIntro;
