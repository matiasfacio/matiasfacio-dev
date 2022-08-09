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
            Hi, I'm Matias. I'm a Web Developer based in Berlin, interested in
            programming Web applications in React.js. <br />I have been working
            with HTML, CSS and Javascript for some years now, and about 2 years
            ago I started to work with React.js and Node.js. <br />
            <br />I deploy my own projects in my VPS using Github Actions,
            Docker and Nginx. I could say that I am interested in both, Front
            and Back end development, but it is in Frontend development where I
            feel that I can give my best. <br />
            <br />I speak: Spanish, English and German. <br />
            <br />I studied 4 years of I.T. back in Patagonia, Argentina, but
            then I decided to follow an artistic path, which I did and now
            occasionally I still do. <br />
            <br />
            Why programming ? I always did all the Websites, video edition and
            graphic materials that I needed for my projects and even for some
            friends. About 2 years ago, I decided to return to my old passion
            and become professional programmer. <br />
            <br />
            In the need of practice, I started to change some of my projects
            into React.js and created some new ones like{" "}
            <a href="https://tbc-next.netlify.app">
              https://tbc-next.netlify.app
            </a>
            , an online video learning platform, and{" "}
            <a href="https://www.tangodefinitions.com">
              www.tangodefinitions.com
            </a>{" "}
            which is a simple search bar for tango related words. <br />
            <br />
            I'm also doing some projects for other clients and for my self, both
            in React.js and Next.js.
            <br />
            <br />
            If you think that we can work together, contact me and let's talk.
          </p>
          <WorkExperienceList>
            <WorkTitle>Work experience:</WorkTitle>
            <li>
              01.04.2022 - present: Frontend Developer at Inklusion-Digital (
              <a href="https://www.inklusion-digital.de/">
                https://www.inklusion-digital.de/
              </a>
              ). Stack: Next.js, SWR, Tailwinds
            </li>
            <li>
              01.05.2021 - 28.02.2022: Frontend Developer at Seabo (
              <a href="https://seabo.com">https://seabo.com</a>). The stack we
              were using consists of: React.js, React-Router, React-Query,
              Redux, Ant Design, Styled-Components, Gitlab and Slack.
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
