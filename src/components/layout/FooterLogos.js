import React from "react";
import ant from "../../images/logos/ant-design.svg";
import css from "../../images/logos/css-3.svg";
import docker from "../../images/logos/docker-icon.svg";
import express from "../../images/logos/express.svg";
import gitlab from "../../images/logos/gitlab.svg";
import github from "../../images/logos/github-icon.svg";
import heroku from "../../images/logos/heroku.svg";
import html from "../../images/logos/html-5.svg";
import javascript from "../../images/logos/javascript.svg";
import jira from "../../images/logos/jira.svg";
import mongodb from "../../images/logos/mongodb.svg";
import nodejs from "../../images/logos/nodejs.svg";
import react from "../../images/logos/react.svg";
import netlify from "../../images/logos/netlify.svg";
import nextjs from "../../images/logos/nextjs-icon.svg";
import slack from "../../images/logos/slack-icon.svg";
import stripe from "../../images/logos/stripe.svg";
import typescript from "../../images/logos/typescript-icon.svg";
import styled from "styled-components";

const logos = [
  react,
  nextjs,
  javascript,
  html,
  css,
  typescript,
  nodejs,
  express,
  docker,
  jira,
  slack,
  gitlab,
  github,
  ant,
  heroku,
  mongodb,
  netlify,
  stripe,
];

export const FooterLogos = () => {
  return (
    <LogosContainer>
      {logos.map((logo, id) => {
        return <img src={logo} key={id} alt={"something"} width={30} />;
      })}
    </LogosContainer>
  );
};

const LogosContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: rgb(233, 233, 233);
  padding: 10px 30px;
  border-bottom: 1px white solid;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
