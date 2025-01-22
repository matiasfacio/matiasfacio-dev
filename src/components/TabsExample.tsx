import { Tab, TabList, TabPanel, Tabs } from "./Tabs";

export const TabsExample = () => {
  return (
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
  );
};
