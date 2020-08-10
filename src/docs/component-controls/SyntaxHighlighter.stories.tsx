import React from 'react';
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple';
import { SyntaxHighlighter, SyntaxHighlighterProps } from '@component-controls/components';

export default {
  title: 'Components/component-controls/SyntaxHighlighter',
  component: SyntaxHighlighter,
};

const source = `import { Button } from 'theme-ui';`;
export const overview = ({ children, dark }: SyntaxHighlighterProps) => {
  return <SyntaxHighlighter dark={dark}>{children}</SyntaxHighlighter>;
};

overview.story = {
  controls: {
    children: {
      type: 'text',
      rows: 10,
      value: source,
      data: null,
    },
    dark: { type: 'boolean' },
  },
};

export const theme = () => (
  <SyntaxHighlighter theme={shadesOfPurple as SyntaxHighlighterProps['theme']}>{source}</SyntaxHighlighter>
);
