import React, { useState } from 'react';
import { Box, Button, Donut } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { Collapsible, CollapsibleProps } from '@component-controls/components';

export default {
  title: 'component-controls/Collapsible',
  component: Collapsible,
  category: 'Containers',
} as Document;

export const overview: Example<CollapsibleProps> = ({ easing }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'close' : 'open'}
      </Button>
      <Collapsible isOpen={isOpen} easing={easing}>
        <Donut value={1 / 2} />
      </Collapsible>
    </Box>
  );
};

overview.smartControls = {
  smart: false,
};
overview.controls = {
  easing: {
    type: ControlTypes.OPTIONS,
    options: ['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out'],
  },
};
