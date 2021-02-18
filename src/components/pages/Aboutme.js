import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.svg"

const Aboutme = () => {
  return (
    <AboutMeContainer>
      <TextContainer>
        <p>
          Hi, I'm Matias. I'm a Frontend Developer based in Berlin, interested
          in programming React.js applications. <br />
          <br />
          I have been working with HTML, CSS and Javascript for some years now,
          and at the beginning of the last year I started to work with React.js,
          Node.js and Express.js. <br />
          Recently I started to learn and practice Nginx and Docker in a Virtual
          Private Server where I like to try the things that I'm interested in.
          <br />
          I also studied 4 years of Analysis of Computer Systems.
          <br />
          <br />I speak: Spanish, English and German.
          <br />
          Hire me as Junior Frontend Developer.
        </p>
      </TextContainer>
    </AboutMeContainer>
  );
};

export default Aboutme;

const AboutMeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const TextContainer = styled.div`
  width: clamp(350px, 90%, 800px);
  margin: 0 auto;
  padding: 50px 2em;
  &:before {
    position: absolute;
    content: url(${logo});
    width: 40px;
    height: 40px;
    transform: translate(-40px, -4px);
  }
`;

export const TitleContainer = styled.div`
  margin-bottom: 20px;
`;
