import React from 'react';
import { Donut } from 'theme-ui';
import { ExternalLink, ActionContainer } from '@component-controls/components';

export default {
  title: 'Components/component-controls/ActionContainer',
  component: ActionContainer,
};

export const overview = () => {
  return (
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
  );
};

export const order = () => (
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

export const override = () => (
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
