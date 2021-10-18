import React from "react";
import styled from "styled-components";
import github from "../../images/github-icon.svg";
import { FooterLogos } from "../layout/FooterLogos";
import { useLocation } from "react-router";

const Footer = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <FooterContainer>
        {location.pathname === "/myskills" && <FooterLogos />}
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
            onClick={() =>
              (window.location = "https://github.com/matiasfacio/")
            }
          >
            <img src={github} width="30px" alt="github" /> Github
          </div>
        </FooterBottom>
      </FooterContainer>
    </>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  position: fixed;
  width: 100vw;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  background-color: rgb(233, 233, 233);
  font-size: 100%;
  justify-content: space-around;
  align-items: center;
  color: tomato;
  a {
    color: black;
    font-size: 0.9rem;
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  @media (max-width: 768px) {
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
