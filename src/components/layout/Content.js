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
          <Header title = "My Skills"/>
          <Myskills />
        </Route>
        <Route path="/aboutme">
          <Header title = "About Me"/>
          <Aboutme />
        </Route>
        <Route path="/mywork">
           <Header title = "My Work"/>
           <Mywork/>
        </Route>
      </Switch>
    </ContentContainer>
  );
};

export default Content;

const ContentContainer = styled.div`
  margin-top: 0px;
  background-color: white;
  color: black;
  padding 0 2em;
  min-height: calc(100vh - 200px - 70px);
`;
