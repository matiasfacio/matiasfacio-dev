import React from "react";
import ButtonStyled from "../elements/Button";
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
          <ButtonStyled
            text="myworks"
            typeOfButton="secondary"
            goto="/mywork"
          />
          <ButtonStyled
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
