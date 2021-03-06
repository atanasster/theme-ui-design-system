/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Input, InputProps } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';

export default {
  title: 'theme-ui/Input',
  component: Input,
  category: 'Input',
} as Document;

export const overview: Example<InputProps> = ({ defaultValue }) => (
  <Input defaultValue={defaultValue} />
);

overview.controls = {
  defaultValue: { type: ControlTypes.TEXT, value: 'Katlyn Oberbrunner' },
};
