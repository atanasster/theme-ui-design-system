import React from 'react';
import { Tabs, Tab, TabList, TabPanel } from '@component-controls/components';

export default {
  title: 'Components/component-controls/Tabs',
  component: Tabs,
  subcomponents: {
    Tab,
    TabList,
    TabPanel,
  },
};

const tabs: {
  [key: string]: string;
} = {
  'panel 1': 'panel 1',
  'panel 2': 'panel 2',
};
export const overview = () => {
  return (
    <Tabs>
      <TabList>
        {Object.keys(tabs).map(key => (
          <Tab key={`tab_${key}`}>{key}</Tab>
        ))}
      </TabList>
      {Object.keys(tabs).map(key => (
        <TabPanel key={`panel_${key}`}>{tabs[key]}</TabPanel>
      ))}
    </Tabs>
  );
};

export const onSelect = () => {
  return (
    <Tabs onSelect={index => console.log(index)}>
      <TabList>
        {Object.keys(tabs).map(key => (
          <Tab key={`tab_${key}`}>{key}</Tab>
        ))}
      </TabList>
      {Object.keys(tabs).map(key => (
        <TabPanel key={`panel_${key}`}>{tabs[key]}</TabPanel>
      ))}
    </Tabs>
  );
};

export const direction = () => {
  return (
    <Tabs onSelect={index => console.log(index)} dir="rtl">
      <TabList>
        {Object.keys(tabs).map(key => (
          <Tab key={`tab_${key}`}>{key}</Tab>
        ))}
      </TabList>
      {Object.keys(tabs).map(key => (
        <TabPanel key={`panel_${key}`}>{tabs[key]}</TabPanel>
      ))}
    </Tabs>
  );
};

export const fontSize = () => {
  return (
    <Tabs fontSize={4}>
      <TabList>
        {Object.keys(tabs).map(key => (
          <Tab key={`tab_${key}`}>{key}</Tab>
        ))}
      </TabList>
      {Object.keys(tabs).map(key => (
        <TabPanel key={`panel_${key}`}>{tabs[key]}</TabPanel>
      ))}
    </Tabs>
  );
};
