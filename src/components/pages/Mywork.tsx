import React from "react";
import styled from "styled-components";
import { Title } from "../elements/Title";

const Mywork = () => {
  return (
    <>
      <WorksContent>
        <WorkUnit>
          <Title>React.js</Title>
          <ul>
            <li>
              <a
                href="https://tbc-next.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Tango BootCamp
              </a>
              <Details>
                Next.js / Stripe.js
                <br />
                / PlanetScale (MySQL) <br />/ Netlify (new)
              </Details>
            </li>
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
                Github Actions / Stripe.js
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
                href="https://mariaelizakouloudi.com/"
                target="_blank"
                rel="noreferrer"
              >
                Maria Elize Kouloudi (Artist) <br />
              </a>
              <Details>
                React.js / Styled-Components <br />
              </Details>
            </li>
            <li>
              <a
                href="https://www.diakidz.com/"
                target="_blank"
                rel="noreferrer"
              >
                Diakidz.com <br />
              </a>
              <Details>
                Next.js / Styled-Components / Netlify
                <br />
              </Details>
            </li>
          </ul>
        </WorkUnit>
        <WorkUnit>
          <Title>Prototypes</Title>
          <ul>
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
      <Ps>
        <p>
          * please, mind that Heroku put the projects to sleep, so some of them
          are going to load very slowly, but they will be fully interactive
          after that. Be litle patient!
        </p>
      </Ps>
    </>
  );
};

export default Mywork;

const Ps = styled.div`
  margin: 0 auto;
  max-width: 65ch;
  padding: 20px;
  p {
    font-size: 0.7rem;
  }
`;

const WorksContent = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 100px;
  gap: 50px;
  @media (max-width: 740px) {
    padding: 100px;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;
  }
`;

const WorkUnit = styled.div`
  /* margin: 0 auto; */

  a {
    color: var(--main-color);
  }
`;

const Details = styled.div`
  font-size: 80%;
  font-weight: light;
  padding-left: 10px;
  position: relative;
  transition: all 250ms ease;
`;
