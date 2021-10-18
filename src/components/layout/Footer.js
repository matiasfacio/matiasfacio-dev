import React from "react";
import styled from "styled-components";
import github from "../../images/github-icon.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <div style={{ textAlign: "right" }}>
        Let's talk <br />
        <a href="tel:00491774946117">Phone: +49 177 4946117</a>
      </div>
      <a href="mailto:matiaspersonal@gmail.com">matiaspersonal@gmail.com</a>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          cursor: "pointer",
        }}
        onClick={() => (window.location = "https://github.com/matiasfacio/")}
      >
        <img src={github} width="30px" alt="github" /> Github
      </div>
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
  background-color: rgb(233, 233, 233);
  font-size: 100%;
  justify-content: space-around;
  align-items: center;
  color: tomato;
  a {
    color: black;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    height: 50px;
    margin-top: 50px;
    position: relative;
    flex-direction: column;
    height: auto;
    align-items: flex-end;
    background-color: rgb(233, 233, 233);
    color: tomato;
    a {
      color: black;
    }
  }
`;
