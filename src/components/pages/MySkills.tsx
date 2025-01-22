import React from "react";
import styled from "styled-components";
import { Title } from "../elements/Title";

const MySkills = () => {
  return (
    <MySkillsContainer>
      <MySkillsContent>
        <WorkUnit>
          <Title>Frontend (SPA)</Title>
          <p>
            Typescript, React, Next.js, React Native, Expo.dev
            <br /> <br />
            React-Router
            <br /> <br />
            React-Query, SWR, Redux
            <br /> <br />
            Styled-Components, Ant Design, Material UI, Tailwind.js, Figma
            <br /> <br />
            Gitlab, Github, Slack, Discord, Google Workspace
            <br /> <br />
            HTML, CSS, SASS, Flexbox, Grid, Responsiveness, Canvas
          </p>
        </WorkUnit>
        <WorkUnit>
          <Title>Backend</Title>
          <p>
            Rest API, Node.js, Express.js,
            <br /> <br />
            Docker
            <br /> <br />
            MongoDB, MySql
          </p>
        </WorkUnit>
      </MySkillsContent>
    </MySkillsContainer>
  );
};

export default MySkills;

const MySkillsContainer = styled.div`
  width: 100%;
  @media (max-width: 740px) {
    margin-bottom: 0;
  }
`;

const MySkillsContent = styled.div`
  padding: 0px 2em;
  max-width: 1200px;
  margin: 100px auto;
  display: flex;
  justify-content: space-around;
  gap: 50px;
  @media (max-width: 740px) {
    flex-direction: column;
    margin-top: 0px;
    align-items: flex-start;
    padding: 100px;
  }
`;

const WorkUnit = styled.div`
  p {
    margin-top: 16px;
  }
`;
