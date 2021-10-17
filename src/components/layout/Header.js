import React from "react";
import styled from "styled-components";

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <h3>{title === "Homepage" ? "" : title}</h3>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin-top: 100px;
  border: 1px transparent solid;
  h3 {
    text-transform: uppercase;
  }
`;
