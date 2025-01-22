import styled from "styled-components";
import {
  Children,
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

type TabListContext = {
  currentIndex: number;
  onTabChange: (id: number) => void;
  id: string;
};
type TabsContext = {};
type TabPanelContext = {
  currentIndex: number;
  id: string;
  "aria-labelledby": string;
};

const tabListContext = createContext<TabListContext>({} as TabListContext);
const tabPanelContext = createContext<TabPanelContext>({} as TabPanelContext);
const tabsContext = createContext<TabsContext>({} as TabsContext);

const useTabList = () => {
  const context = useContext(tabListContext);
  if (!context) {
    throw Error("use under tabList Provider");
  }
  return context;
};

const useTabPanel = () => {
  const context = useContext(tabPanelContext);
  if (!context) {
    throw Error("use under tabPanel Provider");
  }
  return context;
};

const useTabs = () => {
  const context = useContext(tabsContext);
  if (!context) {
    throw Error("use under tab Provider");
  }
  return context;
};

export const Tabs = ({ children, id }: { children: ReactNode; id: string }) => {
  const childrenArray = Children.toArray(children);
  const [tabList, ...tabPanels] = childrenArray;
  const [currentIndex, setCurrentIndex] = useState(0);
  const onTabChange = (idx: number) => {
    setCurrentIndex(idx);
  };

  return (
    <>
      <tabListContext.Provider value={{ currentIndex, onTabChange, id }}>
        {tabList}
      </tabListContext.Provider>
      <tabPanelContext.Provider
        value={{
          currentIndex,
          id: `${id}-${currentIndex}-tab`,
          "aria-labelledby": `${id}-${currentIndex}`,
        }}
      >
        {tabPanels[currentIndex]}
      </tabPanelContext.Provider>
    </>
  );
};

export const TabList = ({
  children,
  orientation = "horizontal",
}: {
  children: ReactNode;
  orientation?: Orientation;
}) => {
  const tabs = Children.toArray(children);
  const { currentIndex, onTabChange } = useTabList();
  const onSetTabActive = (id: number) => {
    onTabChange(id);
  };
  return (
    <StyledTabsContainer orientation={orientation} role={"tablist"}>
      {tabs.map((child, index) => {
        const isSelected = index === currentIndex;

        return (
          <tabsContext.Provider
            key={index}
            value={{
              onClick: () => onSetTabActive(index),
              tabIndex: isSelected ? 0 : -1,
            }}
          >
            {child}
          </tabsContext.Provider>
        );
      })}
    </StyledTabsContainer>
  );
};

export const Tab = ({ title }: { title: string }) => {
  const tabAttributes = useTabs();

  return (
    <>
      <StyledTab role={"tab"} {...tabAttributes} id={title}>
        {title}
      </StyledTab>
    </>
  );
};

type Orientation = "horizontal" | "vertical";

export const TabPanel = ({ children }: { children: ReactNode }) => {
  const { "aria-labelledby": aria } = useTabPanel();
  return (
    <StyledTabPanel role={"tabpanel"} aria-labelledby={aria}>
      {children}
    </StyledTabPanel>
  );
};

const StyledTab = styled.div`
  --bg-color: var(--main-color-light);
  border: 1px var(--bg-color) solid;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 2px;
  :focus {
    background-color: rgba(0, 0, 0, 1);
  }
`;

const StyledTabsContainer = styled.div<{ orientation: Orientation }>`
  display: flex;
  flex-direction: ${({ orientation }) =>
    orientation === "horizontal" ? "row" : "column"};
  gap: 20px;
`;

const StyledTabPanel = styled.div`
  background-color: var(--main-bg-color);
  border: 1px var(--main-color-light) solid;
  height: 100px;
  width: 40ch;
  padding: 20px;
  border-radius: 2px;
`;
