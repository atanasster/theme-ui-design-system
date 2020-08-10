import React from 'react';
import { Markdown, ThemeProvider } from '@component-controls/components';

export default {
  title: 'Components/component-controls/Markdown',
  component: Markdown,
};

export const overview = () => (
  <ThemeProvider>
    <Markdown>{`
# Header H1
## Header H2
### Header H3
#### Header H4
##### Header H5

some text 

\`@theme-ui\`    
`}</Markdown>
  </ThemeProvider>
);

export const image = () => (
  <ThemeProvider>
    <Markdown>
      ![integrated in
      storybook](https://raw.githubusercontent.com/ccontrols/component-controls/master/integrations/storybook/images/component-controls.gif)
    </Markdown>
  </ThemeProvider>
);
