import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

export const GlobalContext = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  html {
    overflow: scroll;
  }

  body {
    background-color: white;
  }


  h1 {
    font-size: clamp(2rem, 10vw, 4rem);
    font-weight: 100;
    text-transform: capitalize;
    color: rgba(0,0,0,0.8);
  }
  h2 {
    font-size: 2rem;
    font-weight: 100;
    text-transform: capitalize;
  }
  h3 {
    font-weight: 300;
    text-transform: uppercase;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    font-weight: 300;
  }
  ul {
    list-style: none;
    margin-top: 20px;
  }
  li {
    padding-bottom: 5px;
    font-size: 1.1rem;
    line-height: 1.6;
    font-weight: 300;
  }
  a {
    text-decoration: none;
    color: black;
    font-size: 1.1rem;
    line-height: 1.6;
    font-weight: 300;
  }
}`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContext />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
