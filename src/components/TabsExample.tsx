import { Tab, TabList, TabPanel, Tabs } from "./Tabs";

export const TabsExample = () => {
  return (
    <>
      <h2>Context API - Children function from React</h2>
      <p>
        Use two context, one for TabList (tab navigator) and one for the Panel
        showing the selected tab. The Children function is used to check for the
        children of the Tabs component which is a container with some styles.
      </p>
      <Tabs id="my-tabs">
        <TabList>
          <Tab title={"tab 1"} />
          <Tab title={"tab 2"} />
          <Tab title={"tab 3"} />
          <Tab title={"tab 4"} />
        </TabList>
        <TabPanel>Some info in tab panel 1</TabPanel>
        <TabPanel>Some info in tab panel 2</TabPanel>
        <TabPanel>Some info in tab panel 3</TabPanel>
        <TabPanel>Some info in tab panel 4</TabPanel>
      </Tabs>
    </>
  );
};
