import React from "react";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Myskills from "../pages/Myskills";
import Mywork from "../pages/Mywork";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Aboutme from "../pages/Aboutme";

const Content = () => {
  return (
    <ContentContainer>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contact">
          <Header title="Contact - Impressum" />
          <Contact />
        </Route>
        <Route path="/myskills">
          <Header title="My Skills" />
          <Myskills />
        </Route>
        <Route path="/aboutme">
          <Header title="About Me" />
          <Aboutme />
        </Route>
        <Route path="/mywork">
          <Header title="My Work" />
          <Mywork />
        </Route>
      </Switch>
    </ContentContainer>
  );
};

export default Content;

const ContentContainer = styled.section`
  width: 100vw;
  padding: 10px;
  padding-bottom: 100px;
  margin-top: 100px;
  background-color: var(--main-bg-color);

  @media screen and (max-width: 740px) {
    margin-top: 0;
    padding-top: 100px;
    min-height: calc(100vh - 100px);
  }
`;
