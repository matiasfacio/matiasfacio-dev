import styled from "styled-components";
import React from "react";
import logo from "../../images/logo.svg";

export const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

const StyledTitle = styled.div`
  font-weight: 300;
  text-transform: uppercase;
  position: relative;
  font-size: 1.5rem;
  &:before {
    position: absolute;
    content: url(${logo});
    width: 40px;
    height: 40px;
    transform: translate(-40px, -4px);
  }
`;
