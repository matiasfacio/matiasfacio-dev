import React from "react";
import styled, { keyframes } from "styled-components";

const Circles = () => {
  return (
    <CirclesContainer>
      <Circle theme={{ right: "10%", top: "35%" }} />
      <Circle theme={{ right: "60%", top: "35%" }} />
      <Circle theme={{ right: "35%", top: "10%" }} />
      <Circle theme={{ right: "35%", top: "60%" }} />
    </CirclesContainer>
  );
};

export default Circles;

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

const CirclesContainer = styled.div`
  border: 5px rgb(248, 139, 120) solid;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  position: relative;
  animation: ${rotate} 5s linear infinite;
`;

const Circle = styled.div`
  position: absolute;
  background-color: rgb(248, 139, 120);
  right: ${(props) => props.theme.right};
  top: ${(props) => props.theme.top};
  height: 30%;
  width: 30%;
  border-radius: 50%;
  border: 1px rgb(248, 139, 120) solid;
  transition: all 0.5s;
  &:hover {
    background-color: rgb(248, 139, 120);
    width: 50%;
    height: 50%;
  }
`;
