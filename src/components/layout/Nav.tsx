import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import menuImage from "../../images/menu.svg";

const Nav = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);

  const handleClick = () => {
    setMenuVisibility(!menuVisibility);
  };

  return (
    <div>
      <LogoMenu onClick={handleClick}>
        <img
          id="logomenu"
          src={menuImage}
          width="50px"
          height="50px"
          alt="menu"
        />
      </LogoMenu>
      <NavBar visible={menuVisibility}>
        <ul>
          <Link to="/" onClick={handleClick}>
            Home
          </Link>
          <Link to="/aboutme" onClick={handleClick}>
            AboutMe
          </Link>
          <Link to="/mywork" onClick={handleClick}>
            MyWork
          </Link>
          <Link to="/myskills" onClick={handleClick}>
            MySkills
          </Link>
          <Link to="/contact" onClick={handleClick}>
            Contact
          </Link>
        </ul>
      </NavBar>
    </div>
  );
};

export default Nav;

const NavBar = styled.nav<{ visible?: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 99;
  height: 100px;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  overflow-x: hidden;
  transform: translate(0vw, 0vh);
  background-color: var(--main-bg-color);
  width: 100%;

  ul {
    display: flex;
    flex-direction: row;
    a {
      padding: 10px;
      margin: 10px;
      text-decoration: none;
      color: black;
      border-radius: 10px;
      font-weight: 500;
      text-transform: capitalize;
      color: var(--main-color-light);

      &:hover {
        color: white;
        background-color: var(--secondary-bg-color);
        border-bottom: none;
      }
      &:nth-last-child(1) {
        background-color: var(--main-color);
        color: white;
      }
    }
    @media (max-width: 740px) {
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      width: 100%;
      transition: all 0.5s ease-in-out;

      ${({ visible }) =>
        visible
          ? "opacity: 1; transform: translateX(0); z-index: 100;"
          : "opacity: 0; transform: translateX(100vw)"}
    }
  }
  @media (max-width: 740px) {
    height: 100%;
    flex-direction: column;
    justify-content: center;
    transition: all 0.5s ease-in-out;

    ${({ visible }) =>
      visible
        ? "opacity:1; transform: translateX(0);z-index: 100;"
        : "opacity: 0; transform: translateX(100vw)"}
  }
`;

const LogoMenu = styled.div`
  display: none;
  @media (max-width: 740px) {
    display: block;
    position: fixed;
    right: 2em;
    top: 10px;
  }
`;
