import styled from "styled-components";
import { Title } from "../elements/Title";

const MySkills = () => {
  return (
    <MySkillsContainer>
      <MySkillsContent>
        <WorkUnit>
          <Title>Frontend</Title>
          <p>
            Typescript, React, Next.js, React Native, Expo.dev, Chrome
            Extensions
            <br /> <br />
            React-Router
            <br /> <br />
            React-Query, SWR, Redux
            <br /> <br />
            Styled-Components, Ant Design, Material UI, Tailwind.js, Figma
            <br /> <br />
            Gitlab, Github, Sentry, Slack, Discord, Google Workspace
            <br /> <br />
            HTML, CSS, SASS, Flexbox, Grid, Canvas
          </p>
        </WorkUnit>
        <WorkUnit>
          <Title>Backend</Title>
          <p>
            (My experience in backend is limited to small and hobby projects,
            but I am always open to new challenges and learning experiences.)
          </p>
          <p>
            Rest API, Node.js, Express.js,
            <br /> <br />
            Docker
            <br /> <br />
            MongoDB, MySql
          </p>
        </WorkUnit>
      </MySkillsContent>
      <StyledHobbies>
        <h2>What are my IT hobbies ?</h2>
        <p>
          I began developing Chrome Extensions as a result of a job interview
          challenge. This allowed me to explore and understand Chrome's browser
          APIs better. These extensions are not available in stores, as they
          were created primarily for learning purposes and to enhance my
          personal browsing experience.
        </p>
        <p>
          Speech Navigator: This extension leverages the Speech API to bookmark
          paths within a domain, enabling voice navigation. It is implemented
          using React.js.
        </p>
        <p>
          Web Reader: Uses the Speech API, to read loud the by the user selected
          text. It allows for speed of and volume.
        </p>
        <p>
          Title Reader: This extension uses the Chrome Extension service worker
          to track its activated/deactivated state via the icon badge. It
          identifies document headers, attaches links to them, and lists them in
          a side panel created with React.js.
        </p>
        <p>
          Omnibox Navigation: Mostly for personal use. Use Omnibox for
          navigation.
        </p>
      </StyledHobbies>
    </MySkillsContainer>
  );
};

export default MySkills;

const MySkillsContainer = styled.div`
  padding: 0px 2em;
  max-width: 1200px;
  margin: 100px auto;
  width: 100%;
  @media (max-width: 740px) {
    margin-bottom: 0;
    margin: 2vw auto;
  }
`;

const MySkillsContent = styled.div`
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const WorkUnit = styled.div`
  p {
    margin-top: 16px;
  }
`;

const StyledHobbies = styled.div`
  margin-top: 50px;
  h2 {
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 10px;
  }
`;
