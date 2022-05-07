import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

export const GlobalContext = createGlobalStyle`

  #root {
    --main-bg-color: #1F2E3D;
    --secondary-bg-color: #2C4156;
    --main-color: #65DFDC;
    --main-color-tomato: tomato;
    --main-color-light: #E3FFFE;
  }

  html {
    background-color: #1F2E3D;
    overflow-x: hidden;
  }



  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


 
  body {
    background-color: var(--main-bg-color);
  }


  h1 {
    font-size: clamp(2rem, 10vw, 4rem);
    font-weight: 600;
    text-transform: capitalize;
    color: var(--main-color-light);
    font-family: 'Roboto Mono', monospace;
  }
  h2 {
    font-size: 2rem;
    font-weight: 100;
    text-transform: capitalize;
    color: var(--main-color-light);
    font-family: 'Roboto Mono', monospace;


  }
  h3 {
    font-weight: 300;
    text-transform: uppercase;
    color: var(--main-color-light);
    font-family: 'Roboto Mono', monospace;

  }

  h4 {
    color: var(--main-color-light);
    font-family: 'Roboto Mono', monospace;

  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    font-weight: 300;
    font-family: 'Roboto Mono', monospace;
    color: white;
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
    color: white;
  }

  a {
    text-decoration: none;
    color: var(--main-color-light);
    font-size: 1rem;
    line-height: 1.6;
    font-weight: 300;
    border-bottom: 1px;
    padding-bottom: 3px;
    font-family: 'Roboto Mono', monospace;
    border-bottom: 0.075rem transparent solid;

    :hover{
      border-bottom: 0.075rem var(--main-color-light) solid;
    }
  }
`;

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
