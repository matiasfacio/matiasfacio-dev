import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = ({ text, typeOfButton, goto }) => {
  return (
    <ButtonStyled theme={typeOfButton} to={`${goto}`}>
      {text}
    </ButtonStyled>
  );
};

export default Button;

export const ButtonStyled = styled(Link)`
  font-size: 1.5rem;
  font-weight: 500;
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 10px;
  border: 1px transparent solid;
  outline: none;
  background-color: ${(props) =>
    props.theme === "primary" ? "rgb(180, 180, 180)" : "var(--main-color)"};
  color: ${(props) =>
    props.theme === "primary" ? "white" : "var(--main-bg-color)"};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: white;
    color: rgb(86, 86, 86);
  }
  @media (max-width: 395px) {
    padding: 5px;
  }
`;
