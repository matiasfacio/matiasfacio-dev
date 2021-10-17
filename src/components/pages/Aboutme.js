import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.svg";
import matiasfacio from "../../images/MatiasFacio-portrait.jpg";

const Aboutme = () => {
  return (
    <AboutMeContainer>
      <TextContainer>
        <div>
          <p>
            Hi, I'm Matias. I'm a Web Developer based in Berlin, interested in
            programming Web applications in React.js. <br />I have been working
            with HTML, CSS and Javascript for some years now, and about 1.5
            years ago I started to work with React.js and Node.js. <br />
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
            <a href="https://www.tangobootcamp.net">www.tangobootcamp.net</a>,
            an online video learning platform,{" "}
            <a href="https://www.tangodefinitions.com">
              www.tangodefinitions.com
            </a>{" "}
            which is a simple search bar for tango related words. <br />
            <br />
            At the moment I am working as a frontend developer for a shipping
            company. The stack we are using: React.js, React-Router,
            React-Query, Redux, Ant Design, Styled-Components, Gitlab and Slack.
            <br />
            <br />
            If you think I could be a good match for what you are looking for
            contact me and let's talk.
          </p>
        </div>
        <Picture>
          <img
            src={matiasfacio}
            alt="matiasfacio"
            width="250px"
            height="auto"
          />
        </Picture>
      </TextContainer>
    </AboutMeContainer>
  );
};

export default Aboutme;

const AboutMeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding-bottom: 50px;
`;

const TextContainer = styled.div`
  display: flex;
  // width: clamp(300px, 0%, 800px);
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 0em;
  &:before {
    position: absolute;
    content: url(${logo});
    width: 40px;
    height: 40px;
    transform: translate(-40px, -4px);
  }
  @media (max-width: 669px) {
    flex-direction: column;
    &:before {
      display: none;
    }
  }
`;

const Picture = styled.div`
  margin: 0 auto;
  @media (max-width: 669px) {
    padding-top: 30px;
  }
`;

export const TitleContainer = styled.div`
  margin-bottom: 20px;
`;
