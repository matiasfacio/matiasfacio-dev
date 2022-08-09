import React from "react";
import StyledButton from "../elements/Button";
import styled from "styled-components";
import Circles from "../elements/Circles";

const Home = () => {
  return (
    <HomeContainer>
      <ContainerLeft>
        <h1>matias facio</h1>
        <h3>Frontend Developer</h3>
        <br />
        <h4>React.js/Javascript/CSS/HTML</h4>
        <h4>Node.js/Express.js/RestAPI</h4>
        <Buttonera>
          <StyledButton text="mywork" typeOfButton="secondary" goto="/mywork" />
          <StyledButton
            text="myskills"
            typeOfButton="primary"
            goto="/myskills"
          />
        </Buttonera>
      </ContainerLeft>
      <ContainerRight>
        <Circles />
      </ContainerRight>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.section`
  position: relative;
  background-color: var(--main-bg-color);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 350px);
  width: 100%;
  @media (max-width: 740px) {
    flex-direction: column;
    min-height: calc(100vh - 200px);
    padding: 2vw;
  }
  ::before {
    position: absolute;
    content: "code creativity solutions";
    font-size: 5rem;
    opacity: 0.01;
    color: var(--main-color-light);
    writing-mode: vertical-rl;
    bottom: 0;
    right: 0;
    transform: translateY(0);
    transition: all 5s ease;
    @media (max-width: 1200px) {
      display: none;
    }
  }
  &:hover::before {
    opacity: 0.1;
    transform: translateY(10vh);
  }
`;

const ContainerLeft = styled.div`
  h3 {
    margin-top: 10px;
  }
  h4 {
    font-weight: 100;
    margin-top: 5px;
  }
`;

const ContainerRight = styled.div`
  width: 150px;
  height: 150px;
  @media screen and (max-width: 740px) {
    display: none;
  }
`;

const Buttonera = styled.div`
  margin-top: 70px;
`;
