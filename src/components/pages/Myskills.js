import React from "react";
import styled from "styled-components";
import { Title } from "../elements/Title";

const Myskills = () => {
  return (
    <MySkillsContainer>
      <MySkillsContent>
        <WorkUnit>
          <Title>Websites</Title>
          <ul>
            <li>HTML</li>
            <li>CSS/SASS</li>
            <li>Javascript</li>
            <li>Flexbox</li>
            <li>Grid</li>
            <li>Responsiveness</li>
            <li>CSS Canvas</li>
            <li>CSS Transformations</li>
            <li>CSS Animations</li>
            <li>Basic SVG</li>
          </ul>
        </WorkUnit>
        <WorkUnit>
          <Title>Frontend (SPA)</Title>
          <ul>
            <li>React.js</li>
            <li>Next.js</li>
            <li>React-Router</li>
            <li>React-Query</li>
            <li>Redux</li>
            <li>Styled-Components</li>
            <li>Ant Design</li>
            <li>Typescript</li>
          </ul>
        </WorkUnit>
        <WorkUnit>
          <Title>Backend</Title>
          <ul>
            <li>Rest API</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Docker</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </WorkUnit>
      </MySkillsContent>
    </MySkillsContainer>
  );
};

export default Myskills;

const MySkillsContainer = styled.div`
  width: 100%;
`;

const MySkillsContent = styled.div`
  padding: 0px 2em;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 0px;
    align-items: center;
  }
`;

const WorkUnit = styled.div`
  margin: 0 auto;
  margin-top: 50px;
`;
