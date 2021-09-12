import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.svg";

const Mywork = () => {
  return (
    <WorksContent>
      <WorkUnit>
        <h3>React.js</h3>
        <ul>
          <li>
            <a
              href="https://tateti-tictactoe.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              TicTacToe
            </a>
          </li>
          <li>
            <a
              href="http://www.tangobootcamp.net/"
              target="_blank"
              rel="noreferrer"
            >
              Tango BootCamp
            </a>
          </li>
          <li>
            <a
              href="https://tangoblogging.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="https://www.tangodefinitions.com/"
              target="_blank"
              rel="noreferrer"
            >
              Tango Definitions
            </a>
          </li>
          <li>
            <a
              href="https://kittycart.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Kitty Cart
            </a>
          </li>
        </ul>
      </WorkUnit>
      <WorkUnit>
        <h3>Works</h3>
        <ul>
          <li>
            <a
              href="https://www.tangoschuleberlin.de"
              target="_blank"
              rel="noreferrer"
            >
              Tango Schule Berlin
            </a>
          </li>
          <li>
            <a
              href="https://www.matiasfacio.com"
              target="_blank"
              rel="noreferrer"
            >
              Matias Facio Tango
            </a>
          </li>
          <li>
            <a
              href="/claudia_rogowski/claudia-tango/index.html"
              target="_blank"
              rel="noreferrer"
            >
              Claudia Rogowski (Dance) <br />
              (work in progress)
            </a>
          </li>
          <li>
            <a
              href="/claudia_rogowski/claudia-nueva/index.html"
              target="_blank"
              rel="noreferrer"
            >
              Claudia Rogowski (Hypnosis) <br />
              (work in progress)
            </a>
          </li>
          <li>
            <a
              href="https://mariaelizakouloudi.com/"
              target="_blank"
              rel="noreferrer"
            >
              Maria Elize Kouloudi (Artist) <br />
              (work in progress)
            </a>
          </li>
        </ul>
      </WorkUnit>
      <WorkUnit>
        <h3>Prototypes</h3>
        <ul>
          <li>
            <a
              href="https://tangolibre.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Tango Libre/Next.js
            </a>
          </li>
          <li>
            <a
              href="https://prototype-style-design.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Style&Design/Next.js
            </a>
          </li>

          <li>
            <a href="/dibujar/index.html" target="_blank" rel="noreferrer">
              Drawing/Canvas
            </a>
          </li>
          <li>
            <a href="/black/index.html" target="_blank" rel="noreferrer">
              Blake
            </a>
          </li>

          <li>
            <a
              href="https://svggraphs.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Charts SVG Canvas
            </a>
          </li>
        </ul>
      </WorkUnit>
    </WorksContent>
  );
};

export default Mywork;

const WorksContent = styled.div`
  padding: 0px 2em;
  max-width: 800px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  @media (max-width: 800px) {
    flex-direction: column;
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
`;
