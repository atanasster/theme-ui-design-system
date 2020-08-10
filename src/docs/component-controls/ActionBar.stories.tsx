import React from 'react';
import { Box } from 'theme-ui';
import { ActionBar, ActionBarProps, ThemeProvider, ExternalLink } from '@component-controls/components';

export default {
  title: 'Components/component-controls/ActionBar',
  component: ActionBar,
};

const Container: React.FC = ({ children }) => (
  <ThemeProvider>
    <Box
      style={{
        height: 100,
        backgroundColor: 'rgb(250, 248, 245)',
      }}
    >
      {children}
    </Box>
  </ThemeProvider>
);
export const overview = ({ themeKey }: ActionBarProps) => (
  <Container>
    <ActionBar
      themeKey={themeKey}
      actions={[
        {
          node: 'action 1',
          onClick: () => console.log('clicked'),
        },
        {
          node: <ExternalLink href="https://google.com">google</ExternalLink>,
          onClick: () => console.log('clicked'),
        },
      ]}
    />
  </Container>
);

overview.story = {
  controls: {
    themeKey: {
      type: 'options',
      options: ['actionbar', 'toolbar', 'footer'],
      value: 'actionbar',
    },
  },
};

export const link = () => (
  <Container>
    <ActionBar
      actions={[
        {
          node: <ExternalLink href="https://google.com">google</ExternalLink>,
        },
      ]}
    />
  </Container>
);

export const order = () => (
  <Container>
    <ActionBar
      actions={[
        {
          node: 'action 1',
          onClick: () => console.log('clicked'),
          order: 1,
        },
        {
          node: <ExternalLink href="https://google.com">google</ExternalLink>,
          onClick: () => console.log('clicked'),
          order: 0,
        },
      ]}
    />
  </Container>
);

export const override = () => (
  <Container>
    <ActionBar
      actions={[
        {
          node: 'action 1',
          onClick: () => console.log('clicked'),
          id: 'copy',
        },
        {
          node: <ExternalLink href="https://google.com">google</ExternalLink>,
          onClick: () => console.log('clicked'),
        },
        {
          node: 'Copy',
          id: 'copy',
        },
      ]}
    />
  </Container>
);

export const groupEnd = () => (
  <Container>
    <ActionBar
      actions={[
        {
          node: 'item 1',
        },
        {
          node: 'item 2',
          group: '1',
        },
        {
          node: 'item 3',
          group: '1',
        },
      ]}
    />
  </Container>
);

export const groupStart = () => (
  <Container>
    <ActionBar
      actions={[
        {
          node: 'item 1',
          group: '1',
        },
        {
          node: 'item 2',
          group: '1',
        },
        {
          node: 'item 3',
        },
      ]}
    />
  </Container>
);
