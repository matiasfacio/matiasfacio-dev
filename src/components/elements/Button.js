import React from "react";
import styled from "styled-components";


const Button = ({ text, typeOfButton, goto }) => {


  
  return (
    <ButtonStyled
      theme={typeOfButton}
      as = 'a'
      href = {`${goto}`}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;

export const ButtonStyled = styled.button`
  font-size: 1.5rem;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 10px;
  border: 1px transparent solid;
  outline: none;
  background-color: ${(props) =>
    props.theme === "primary" ? "rgb(180, 180, 180)" : "rgb(248,139,120)"};
  color: ${(props) => (props.theme === "primary" ? "white" : "white")};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: white;
    color: rgb(86, 86, 86);
    border: ${(props) =>
      props.theme === "primary"
        ? "1px rgb(180, 180, 180) solid"
        : "1px rgb(248,139,120) solid"};
  }
`;
