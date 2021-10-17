import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      Let's talk <br />
      Phone: +49 177 4946117
      <a href="https://github.com/matiasfacio/">Check my Github</a>
      <a href="mailto:matiaspersonal@gmail.com">matiaspersonal@gmail.com</a>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  position: fixed;
  width: 100vw;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  padding: 20px;
  background-color: white;
  font-size: 100%;
  justify-content: space-around;
  align-items: center;
  a {
    color: black;
  }

  @media (max-width: 768px) {
    height: 50px;

    margin-top: 50px;
    position: relative;
    flex-direction: column;
    height: auto;
    background-color: rgb(252, 112, 87);
    color: white;
    a {
      color: white;
    }
  }
`;
