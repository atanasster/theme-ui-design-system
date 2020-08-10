import React from 'react';
import { PrismTheme } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';
import duotoneDark from 'prism-react-renderer/themes/duotoneDark';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';
import github from 'prism-react-renderer/themes/github';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight';
import oceanicNext from 'prism-react-renderer/themes/oceanicNext';
import palenight from 'prism-react-renderer/themes/palenight';
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple';

import { Source, SourceProps, ActionItem } from '@component-controls/components';

export default {
  title: 'Components/component-controls/Source',
  component: Source,
};

const source = `export const sample = () => {
  const [state, setState] = React.useState(false);
  return (
    <BooleanEditor
      name="prop"
      onChange={(name, newVal) => setState(newVal)}
      prop={{ type: ControlTypes.BOOLEAN, value: state }}
    />
  );
};`;
export const overview = ({ language, children, dark }: SourceProps) => {
  return (
    <Source language={language} dark={dark}>
      {children}
    </Source>
  );
};

const languages: string[] = [
  'markup',
  'bash',
  'clike',
  'c',
  'cpp',
  'css',
  'javascript',
  'jsx',
  'coffeescript',
  'actionscript',
  'css-extr',
  'diff',
  'git',
  'go',
  'graphql',
  'handlebars',
  'json',
  'less',
  'makefile',
  'markdown',
  'objectivec',
  'ocaml',
  'python',
  'reason',
  'sass',
  'scss',
  'sql',
  'stylus',
  'tsx',
  'typescript',
  'wasm',
  'yaml',
];

overview.story = {
  controls: {
    language: { type: 'options', options: languages, value: 'jsx' },
    dark: { type: 'boolean' },
    children: {
      type: 'text',
      rows: 10,
      value: source,
      data: null,
    },
  },
};

export const theme = () => <Source theme={shadesOfPurple as SourceProps['theme']}>{source}</Source>;

const themes: {
  [key: string]: PrismTheme;
} = {
  dracula: dracula as SourceProps['theme'],
  duotoneDark: duotoneDark as SourceProps['theme'],
  duotoneLight: duotoneLight as SourceProps['theme'],
  github: github as SourceProps['theme'],
  nightOwl: nightOwl as SourceProps['theme'],
  nightOwlLight: nightOwlLight as SourceProps['theme'],
  oceanicNext: oceanicNext as SourceProps['theme'],
  palenight: palenight as SourceProps['theme'],
  shadesOfPurple: shadesOfPurple as SourceProps['theme'],
};
export const themeSelector = () => {
  const [theme, setTheme] = React.useState('dracula');
  const themeAction: ActionItem = {
    node: theme,
    onClick: () => {
      const themeNames = Object.keys(themes);
      const selected = themeNames.indexOf(theme);
      const nextTheme = selected < themeNames.length - 1 ? selected + 1 : 0;
      setTheme(themeNames[nextTheme]);
    },
  };
  return (
    <Source actions={[themeAction]} theme={themes[theme]}>
      {source}
    </Source>
  );
};
