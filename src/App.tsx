import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import ContentAndRouting from "./components/layout/ContentAndRouting";
import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";

function App() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if ("ontouchstart" in document.documentElement) {
      return;
    }
    const handleMouseMove = (e: MouseEvent) => {
      setCoordinates({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <StyledMouse left={coordinates.x} top={coordinates.y} />
      <StyledContainer>
        <Nav />
        <ContentAndRouting />
        <Footer />
      </StyledContainer>
    </>
  );
}

export default App;

const StyledMouse = styled.div<{ left: number; top: number }>`
  position: fixed;
  left: ${({ left }) => `${left}px`};
  top: ${({ top }) => `${top}px`};
  transform: translate(-25px, -25px);
  width: 50px;
  aspect-ratio: 1;
  background-color: #47f0ff78;
  border-radius: 50%;
  z-index: 1000;
  pointer-events: none;
`;

const animateEntry = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const StyledContainer = styled.div`
  background-color: red;
  animation: ${animateEntry} 1s forwards;
`;
