import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import menuImage from "../../images/menu.svg";

const Nav = () => {
  useEffect(() => {
    const logomenu = document.querySelector("#logomenu");
    const mainMenu = document.querySelector("nav");

    const hideMenu = () => {
      mainMenu.style.transform = "translate(100vw, 0)";
    };

    const showMenu = () => {
      mainMenu.style.transform = "translate(0vw,0)";
      mainMenu.addEventListener("click", () => hideMenu());
    };

    logomenu.addEventListener("click", () => showMenu());

    return (
      logomenu.removeEventListener("click", () => showMenu()),
      mainMenu.removeEventListener("click", hideMenu)
    );
  });

  return (
    <div>
      <LogoMenu>
        <img
          id="logomenu"
          src={menuImage}
          width="50px"
          height="50px"
          alt="menu"
        />
      </LogoMenu>
      <NavBar>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/aboutme">AboutMe</Link>
          <Link to="/mywork">MyWork</Link>
          <Link to="/myskills">MySkills</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </NavBar>
    </div>
  );
};

export default Nav;

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 99;
  height: auto;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  overflow-x: hidden;
  transform: translate(0vw, 0vh);

  ul {
    display: flex;
    flex-direction: row;
    a {
      padding: 10px;
      margin: 10px;
      text-decoration: none;
      color: black;
      border-radius: 10px;
      font-weight: 300;
      text-transform: uppercase;
      &:hover {
        color: white;
        border-color: rgb(180, 180, 180);
        background-color: rgb(180, 180, 180);
      }
      &:nth-last-child(1) {
        background-color: tomato;
        color: white;
      }
    }
    @media (max-width: 800px) {
      height: 100%;
      flex-direction: column;
      justify-content: center;
    }
  }
  @media (max-width: 800px) {
    height: 100%;
    flex-direction: column;
    justify-content: center;
    transform: translate(100vw, 0);
    transition: all 0.5s ease-in-out;
  }
`;

const LogoMenu = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
    position: fixed;
    right: 2em;
    top: 10px;
  }
`;
