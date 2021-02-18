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
            <a href="/">TicTacToe</a>
          </li>
          <li>
            <a href="/">Tango BootCamp</a>
          </li>
          <li>
            <a href="/">Blog (MERN)</a>
          </li>
          <li>
            <a href="/">Kitty Cart</a>
          </li>
          <li>
            <a href="/">Tango Definitions.com (MERN)</a>
          </li>
        </ul>
      </WorkUnit>
      <WorkUnit>
        <h3>Works</h3>
        <ul>
          <li>
            <a href="https://www.tangoschuleberlin.de">Tango Schule Berlin</a>
          </li>
          <li>
            <a href="https://www.matiasfacio.com">Matias Facio Tango</a>
          </li>
          <li>
            <a href="https://www.matiasfacio.com/claudiatango/">
              Claudia Rogowski
            </a>
          </li>
        </ul>
      </WorkUnit>
      <WorkUnit>
        <h3>HTML/CSS/Javascript</h3>
        <ul>
          <li>
            <a href="/">Blake</a>
          </li>
          <li>
            <a href="/">Coffee is More</a>
          </li>
          <li>
            <a href="/">Yoga & Pilates</a>
          </li>
          <li>
            <a href="/">Graphics SVG Canvas experiment</a>
          </li>
        </ul>
      </WorkUnit>
    </WorksContent>
  );
};

export default Mywork;

const WorksContent = styled.div`
  padding: 0px 2em;
  width: clamp(350px, 90%, 900px);
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  @media (max-width: 600px) {
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
