import React from 'react';
import { Document, Example } from '@component-controls/core';
import { Tabs, Tab, TabList, TabPanel } from '@component-controls/components';

export default {
  title: 'component-controls/Tabs',
  component: Tabs,
  subcomponents: {
    Tab,
    TabList,
    TabPanel,
  },
  category: 'Navigation',
} as Document;

const tabs: {
  [key: string]: string;
} = {
  'panel 1': 'panel 1',
  'panel 2': 'panel 2',
};
export const overview: Example = () => {
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

export const onSelect: Example = () => {
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

export const direction: Example = () => {
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

export const fontSize: Example = () => {
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
