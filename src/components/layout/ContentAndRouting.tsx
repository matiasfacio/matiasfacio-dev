import React from "react";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import MySkills from "../pages/MySkills";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import AboutMe from "../pages/AboutMe";
import { Playground } from "../pages/Playground";
import { Navigate } from "react-router";

const ContentAndRouting = () => {
  return (
    <ContentContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/contact"
          element={
            <>
              <Header title="Contact - Impressum" />
              <Contact />
            </>
          }
        />

        <Route
          path="/myskills"
          element={
            <>
              <Header title="Tech stack" />
              <MySkills />
            </>
          }
        />

        <Route
          path="/aboutme"
          element={
            <>
              <Header title="About Me" />
              <AboutMe />
            </>
          }
        />
        <Route
          path={"/playground"}
          element={
            <>
              <Header title={"Playground"} />
              <Playground />
            </>
          }
        />
        <Route path={"*"} element={<Navigate to={"/"} replace />} />
      </Routes>
    </ContentContainer>
  );
};

export default ContentAndRouting;

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
