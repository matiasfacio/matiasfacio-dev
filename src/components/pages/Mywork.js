import React from "react";
import styled from "styled-components";
import { Title } from "../elements/Title";

const Mywork = () => {
  return (
    <WorksContent>
      <WorkUnit>
        <Title>React.js</Title>
        <ul>
          <li>
            <a
              href="http://www.tangobootcamp.net/"
              target="_blank"
              rel="noreferrer"
            >
              Tango BootCamp
            </a>
            <Details>
              React.js / Node.js / <br />
              RestAPI / MySQL / Docker /<br />
              Github Actions
            </Details>
          </li>
          <li>
            <a
              href="https://tangoblogging.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
            <Details>
              React.js / Node.js / <br />
              RestAPI / MongoDB / Heroku /
            </Details>
          </li>
          <li>
            <a
              href="https://www.tangodefinitions.com/"
              target="_blank"
              rel="noreferrer"
            >
              Tango Definitions
            </a>
            <Details>
              React.js / Node.js / <br />
              RestAPI / MongoDB / Docker /<br />
              Github Actions
            </Details>
          </li>
          <li>
            <a
              href="https://tateti-tictactoe.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              TicTacToe
            </a>
            <Details>React.js / Netlify</Details>
          </li>
          <li>
            <a
              href="https://kittycart.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Kitty Cart
            </a>
            <Details>React.js / Netlify</Details>
          </li>
        </ul>
      </WorkUnit>
      <WorkUnit>
        <Title>Works</Title>
        <ul>
          <li>
            <a
              href="https://www.tangoschuleberlin.de"
              target="_blank"
              rel="noreferrer"
            >
              Tango Schule Berlin <br />
            </a>
            <Details>Javascript / HTML / CSS</Details>
          </li>
          <li>
            <a
              href="https://www.matiasfacio.com"
              target="_blank"
              rel="noreferrer"
            >
              Matias Facio Tango
            </a>
            <Details> React.js / Styled-Components</Details>
          </li>
          <li>
            <a
              href="/claudia_rogowski/claudia-tango/index.html"
              target="_blank"
              rel="noreferrer"
            >
              Claudia Rogowski (Dance)
            </a>
            <Details>
              Javascript / HTML / CSS <br />
              (work in progress)
            </Details>
          </li>
          <li>
            <a
              href="/claudia_rogowski/claudia-nueva/index.html"
              target="_blank"
              rel="noreferrer"
            >
              Claudia Rogowski (Hypnosis)
            </a>
            <Details>
              Javascript / HTML / CSS <br />
              (work in progress)
            </Details>
          </li>
          <li>
            <a
              href="https://mariaelizakouloudi.com/"
              target="_blank"
              rel="noreferrer"
            >
              Maria Elize Kouloudi (Artist) <br />
            </a>
            <Details>
              React.js / Styled-Components <br />
              (work in progress)
            </Details>
          </li>
        </ul>
      </WorkUnit>
      <WorkUnit>
        <Title>Prototypes</Title>
        <ul>
          <li>
            <a
              href="https://tangolibre.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Tango Libre
            </a>
            <Details>Next.js / Heroku</Details>
          </li>
          <li>
            <a
              href="https://prototype-style-design.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Style&Design
            </a>
            <Details>Next.js / Netlify</Details>
          </li>

          <li>
            <a
              href="https://magic-canvas.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              Magic Canvas
            </a>
            <Details>Javascript / Canvas / Render</Details>
          </li>
          <li>
            <a href="/black/index.html" target="_blank" rel="noreferrer">
              Blake
            </a>
            <Details>Javascript / HTML / CSS</Details>
          </li>

          <li>
            <a
              href="https://svggraphs.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Charts SVG Canvas
            </a>
            <Details>Javascript / Canvas / Netlify</Details>
          </li>
        </ul>
      </WorkUnit>
    </WorksContent>
  );
};

export default Mywork;

const WorksContent = styled.div`
  padding: 0px 2em;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const WorkUnit = styled.div`
  margin: 0 auto;
  margin-top: 50px;
`;

const Details = styled.div`
  font-size: 80%;
  font-weight: light;
  padding-left: 10px;
  position: relative;
  transition: all 250ms ease;
`;
