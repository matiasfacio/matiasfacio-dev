import React from "react";
import ButtonStyled from "../elements/Button";
import styled from "styled-components";
import Circles from "../elements/Circles";

const Home = () => {

  return (
    <HomeContainer>
      <ContainerLeft>
        <h1>matias facio</h1>
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
      <div style = {{width: 200, height: 200}}>
        <Circles />
      </div>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100vw;
  @media (max-width: 734px) {
    flex-direction: column;
    min-height: 100vh;
  }
`;

const ContainerLeft = styled.div`
  padding: 2em;
`

const Buttonera = styled.div`
  margin-top: 20px;
`
