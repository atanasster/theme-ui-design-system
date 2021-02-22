import React from 'react';
import { Donut, Box } from 'theme-ui';
import { Document, Example } from '@component-controls/core';
import { ExternalLink, ActionContainer } from '@component-controls/components';

export default {
  title: 'component-controls/ActionContainer',
  component: ActionContainer,
  category: 'Containers',
} as Document;

export const overview: Example = () => {
  return (
    <Box style={{ width: '100%' }}>
      <ActionContainer
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
      >
        <Donut value={1 / 2} />
      </ActionContainer>
    </Box>
  );
};

export const order: Example = () => (
  <ActionContainer
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
  >
    <Donut value={1 / 2} />
  </ActionContainer>
);

export const override: Example = () => (
  <ActionContainer
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
        //this will override the action above
        node: 'Copy',
        id: 'copy',
      },
    ]}
  >
    <Donut value={1 / 2} />
  </ActionContainer>
);
