import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.svg"

const Myskills = () => {
  return (
    <MySkillsContainer>
      <MySkillsContent>
        <WorkUnit>
          <h3>Websites</h3>
          <ul>
              <li>HTML</li>
              <li>CSS/SASS</li>
              <li>Javascript</li>
              <li>Responsiveness</li>
              <li>CSS Canvas</li>
              <li>CSS Transformations</li>
              <li>CSS Animations</li>
              <li>Basic SVG</li>
          </ul>
        </WorkUnit>
        <WorkUnit>
          <h3>WebApp</h3>
          <ul>
              <li>React.js</li>
              <li>React-router-dom</li>
              <li>Styled-Components</li>
              <li>Basic Typescript</li>
          </ul>
        </WorkUnit>
        <WorkUnit>
          <h3>Coding</h3>
          <ul>
              <li>Rest API</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
          </ul>
        </WorkUnit>
      </MySkillsContent>
    </MySkillsContainer>
  );
};

export default Myskills;

const MySkillsContainer = styled.div`
    width: 100vw;
`

const MySkillsContent = styled.div`
    padding: 0px 2em;
    width: clamp(350px, 90%, 900px);
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    @media (max-width: 600px) {
      flex-direction: column;
      margin-top: 0px;
    }
`;

const WorkUnit = styled.div`
    margin-top: 50px;
    h3 {
      font-size: 1.5rem;
      position: relative;
      &:before {
        position: absolute;
        content: url(${logo});
        width: 40px;
        height: 40px;
        transform: translate(-40px, -4px);
      }
    }
`