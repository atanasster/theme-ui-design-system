import React from 'react';
import { ProjectIcon } from '@primer/octicons-react';
import { Flex } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { Sidebar, SidebarContext, SidebarContextProvider, ThemeProvider } from '@component-controls/components';

export default {
  title: 'Components/component-controls/Sidebar',
  component: Sidebar,
} as Document;

export const overview: Example<{ collapsible: boolean }> = ({ collapsible }) => (
  <ThemeProvider>
    <SidebarContextProvider collapsible={collapsible}>
      <SidebarContext.Consumer>
        {({ SidebarToggle }) => (
          <Flex css={{ flexDirection: 'row', alignItems: 'start' }}>
            <SidebarToggle />
            <Sidebar>
              <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
              </ul>
            </Sidebar>
          </Flex>
        )}
      </SidebarContext.Consumer>
    </SidebarContextProvider>
  </ThemeProvider>
);

overview.controls = {
  collapsible: { type: ControlTypes.BOOLEAN, value: true },
};

export const title: Example = () => (
  <ThemeProvider>
    <SidebarContextProvider>
      <div style={{ border: '1px solid black' }}>
        <SidebarContext.Consumer>
          {({ SidebarToggle }) => (
            <Flex css={{ flexDirection: 'row', alignItems: 'start' }}>
              <SidebarToggle />

              <Sidebar title="Title">
                <ul>
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                </ul>
              </Sidebar>
            </Flex>
          )}
        </SidebarContext.Consumer>
      </div>
    </SidebarContextProvider>
  </ThemeProvider>
);

export const icon: Example = () => (
  <ThemeProvider>
    <SidebarContextProvider>
      <div style={{ border: '1px solid black' }}>
        <SidebarContext.Consumer>
          {({ SidebarToggle }) => (
            <Flex css={{ flexDirection: 'row', alignItems: 'start' }}>
              <SidebarToggle icon={<ProjectIcon />} />
              <Sidebar title="Title">
                <ul>
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                </ul>
              </Sidebar>
            </Flex>
          )}
        </SidebarContext.Consumer>
      </div>
    </SidebarContextProvider>
  </ThemeProvider>
);

export const buttonProps: Example = () => (
  <ThemeProvider>
    <SidebarContextProvider>
      <div style={{ border: '1px solid black' }}>
        <SidebarContext.Consumer>
          {({ SidebarToggle }) => (
            <Flex css={{ flexDirection: 'row', alignItems: 'start' }}>
              <SidebarToggle aria-label="click to expand/collapse" />
              <Sidebar title="Title">
                <ul>
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                </ul>
              </Sidebar>
            </Flex>
          )}
        </SidebarContext.Consumer>
      </div>
    </SidebarContextProvider>
  </ThemeProvider>
);
