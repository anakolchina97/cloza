import React from "react";
import styled from "styled-components";

type Props = {};

const Msg = (props: Props) => {
  return (
    <MsgIcon
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.325 5.66667C17.325 5.06667 17.0167 4.54167 16.5417 4.25L9.84169 0.325C9.32502 0.0166667 8.67502 0.0166667 8.15835 0.325L1.45835 4.25C0.983354 4.54167 0.666687 5.06667 0.666687 5.66667V14C0.666687 14.9167 1.41669 15.6667 2.33335 15.6667H15.6667C16.5834 15.6667 17.3334 14.9167 17.3334 14L17.325 5.66667ZM8.11669 9.28333L2.11669 5.53333L8.15835 1.99167C8.67502 1.68333 9.32502 1.68333 9.84169 1.99167L15.8834 5.53333L9.88335 9.28333C9.34169 9.61667 8.65835 9.61667 8.11669 9.28333Z" />
    </MsgIcon>
  );
};

const MsgIcon = styled.svg`
  fill: ${(props) => props.theme.colors.black};
  &:hover {
    fill: ${(props) => props.theme.colors.purple};
  }
`;

export default Msg;
