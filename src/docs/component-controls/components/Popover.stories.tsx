import React from 'react';
import { Box, Button, Donut } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { Popover, PopoverProps } from '@component-controls/components';

export default {
  title: 'component-controls/Popover',
  component: Popover,
} as Document;

export const overview: Example<PopoverProps> = ({ placement, trigger }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Popover
      trigger={trigger}
      placement={placement}
      tooltipShown={isOpen}
      onVisibilityChange={isVisible => {
        setIsOpen(isVisible);
      }}
      tooltip={() => (
        <Box>
          <Donut value={1 / 2} />
        </Box>
      )}
    >
      <Button variant="secondary">Click to open</Button>
    </Popover>
  );
};

overview.controls = {
  placement: {
    type: ControlTypes.OPTIONS,
    options: [
      'auto-start',
      'auto',
      'auto-end',
      'top-start',
      'top',
      'top-end',
      'right-start',
      'right',
      'right-end',
      'bottom-end',
      'bottom',
      'bottom-start',
      'left-end',
      'left',
      'left-start',
    ],
    value: 'bottom',
  },
  trigger: {
    type: ControlTypes.OPTIONS,
    options: ['none', 'click', 'right-click', 'hover', 'focus'],
    value: 'click',
  },
};
