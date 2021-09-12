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
        <br/>
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
      <div style = {{width: 150, height: 150}}>
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
  min-height: calc(100vh - 100px - 70px);
  width: 100%;
  @media (max-width: 734px) {
    flex-direction: column;
  }
  @media (max-height: 800px) {
    margin-top: 100px;
  }
`;

const ContainerLeft = styled.div`
  padding: 2em;
  h3 {
    margin-top:10px;
    color: rgba(0,0,0,0.8);
  }
  h4 {
    font-weight: 100;
    margin-top: 5px;
    color: rgba(0,0,0,0.8);
  }
`

const Buttonera = styled.div`
  margin-top: 30px;
`
