import React from "react";
import styled from "styled-components";
import github from "../../images/github-icon.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBottom>
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
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: var(--main-bg-color);
  font-size: 100%;
  justify-content: space-around;
  align-items: center;
  color: var(--main-color);
  min-height: 100px;

  a {
    color: var(--main-color-light);
    font-size: 0.9rem;
  }
  @media (max-width: 740px) {
    position: relative;
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  @media (max-width: 740px) {
    position: relative;
    flex-direction: column;
    height: auto;
    align-items: flex-end;

    color: var(--main-color);
    a {
      color: white;
    }
  }
`;
