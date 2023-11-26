import React from "react";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Myskills from "../pages/Myskills";
import Mywork from "../pages/MyPortfolio";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Aboutme from "../pages/Aboutme";

const Content = () => {
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
              <Myskills />
            </>
          }
        />

        <Route
          path="/aboutme"
          element={
            <>
              {" "}
              <Header title="About Me" />
              <Aboutme />
            </>
          }
        />

        <Route
          path="/myportfolio"
          element={
            <>
              {" "}
              <Header title="My Work" />
              <Mywork />
            </>
          }
        />
      </Routes>
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
