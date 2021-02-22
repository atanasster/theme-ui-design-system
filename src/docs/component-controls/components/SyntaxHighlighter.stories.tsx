import React from 'react';
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { SyntaxHighlighter, SyntaxHighlighterProps } from '@component-controls/components';

export default {
  title: 'component-controls/SyntaxHighlighter',
  component: SyntaxHighlighter,
  category: 'Display',
} as Document;

const source = `import { Button } from 'theme-ui';`;
export const overview: Example<SyntaxHighlighterProps> = ({
  children,
  dark,
}) => <SyntaxHighlighter dark={dark}>{children}</SyntaxHighlighter>;

overview.controls = {
  children: {
    type: ControlTypes.TEXT,
    rows: 10,
    value: source,
    data: null,
  },
  dark: { type: ControlTypes.BOOLEAN },
};

export const theme: Example = () => (
  <SyntaxHighlighter theme={shadesOfPurple}>{source}</SyntaxHighlighter>
);
