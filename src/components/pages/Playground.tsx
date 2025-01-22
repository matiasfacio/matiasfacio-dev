import styled from "styled-components";
import { RecursiveComponent } from "../RecursiveComponent";
import { TabsExample } from "../TabsExample";

export const Playground = () => {
  return (
    <Container>
      <h1>Playground</h1>
      <h3 style={{ minHeight: 24 }}>
        <RecursiveComponent increaseBy={1} />
      </h3>
      <h3>Generic Tabs Example</h3>
      <TabsExample />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2vw;
  gap: 50px;
  background-color: var(--main-bg-color);
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
