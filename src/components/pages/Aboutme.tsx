import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.svg";
import matiasfacio from "../../images/MatiasFacio-portrait.jpg";

const Aboutme = () => {
  return (
    <>
      <AboutMeContainer>
        <AboutMeText>
          <p>
            Hello, I'm Matias, a Berlin-based Frontend developer with a focus on
            crafting Web applications using React.js and Next.js. My programming
            journey spans several years, during which I've worked extensively
            with HTML, CSS, and Javascript. Since 2019, React.js has been a
            central part of my toolkit.
            <br />
            <br />
            Fluent in Spanish, English, and German, I studied IT for four years
            in Patagonia, Argentina. Despite initially following an artistic
            path, I found myself consistently engaged in programming—creating
            websites, editing videos, and designing graphics for projects and
            friends.
            <br />
            <br />
            In 2019, I made a conscious decision to return to programming
            professionally and chose React.js after a friend's recommendation.
            The experience was transformative, and I quickly developed a strong
            affinity for its capabilities.
            <br />
            <br />
            If you're interested in potential collaboration, don't hesitate to
            reach out. I'm eager to connect. Thank you.
          </p>
          <WorkExperienceList>
            <WorkTitle>Work experience:</WorkTitle>
            <li>
              01.01.2023 - present: Fulltime Frontend Developer at Park-Here
              GmbH (
              <a href="https://www.park-here.eu/">https://www.park-here.eu/</a>
              ). <br />
              Stack: React.js, Typescript, React-Query, Styled-Components,
              Material UI, React-Native, Expo, Google Workspace. Lead of the
              Frontend Chapter.
            </li>
            <li>
              01.04.2022 - 31.12.2022: Fulltime Frontend Developer at
              Inklusion-Digital (
              <a href="https://www.inklusion-digital.de/">
                https://www.inklusion-digital.de/
              </a>
              ). <br />
              Stack: Next.js, Typescript, SWR, Tailwinds, Github, Discord.
            </li>
            <li>
              01.05.2021 - 28.02.2022: Contractor Frontend Developer at Seabo (
              <a href="https://seabo.com">https://seabo.com</a>). <br />
              Stack: React.js, Typescript, React-Router, React-Query, Redux, Ant
              Design, Styled-Components, Gitlab and Slack.
            </li>
            <li>
              01.03.2009 - 31.12.2019: Tango Libre Gbr. Management of the
              studio, dance lessons (group and private), co-operation with
              international guest teachers Part of the job is also the
              marketing, including several cycles of redesigning the website (
              <a href="www.tangoschuleberlin.de">www.tangoschuleberlin.de</a>).
            </li>
          </WorkExperienceList>
        </AboutMeText>
        <Picture />
      </AboutMeContainer>
    </>
  );
};

export default Aboutme;

const AboutMeText = styled.div`
  max-width: 65ch;
  a {
    text-decoration: underline;
    :hover {
      border: none;
    }
  }
`;

const AboutMeContainer = styled.div`
  max-width: 1200px;
  margin: 30px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: left;
  padding: 2vw;
  gap: 50px;
  background-color: var(--main-bg-color);
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Picture = styled.div`
  margin: 0 auto;
  height: 250px;
  width: 250px;
  background-image: url(${matiasfacio});
  background-size: cover;
  border-radius: 50%;
  background-position: center top;
  filter: contrast(120%) brightness(100%);
  border: 3px var(--main-color-light) solid;
  @media (max-width: 669px) {
    padding-top: 30px;
  }
`;

const WorkExperienceList = styled.ul`
  margin-top: 100px;
  li {
    margin: 10px 0;
  }
`;

const WorkTitle = styled.div`
  font-size: 1.5rem;
  color: var(--main-color);
  margin: 20px 0;
`;
