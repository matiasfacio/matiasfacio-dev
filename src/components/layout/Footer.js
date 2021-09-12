import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <h3>Let's talk</h3>
      <p>Tel: +49 177 4946117</p>
      <a href = "https://github.com/matiasfacio/">My Github</a>
      <a href = "mailto:matiaspersonal@gmail.com">matiaspersonal@gmail.com</a>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  position: fixed;
  left:0;
  bottom:0;
  width: 100vw;
  height: 50px;
  color: gray;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: white;
  @media (max-width: 768px) {
    position: relative;
    flex-direction: column;
    height: auto;
  }
`;
