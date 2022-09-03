import { Theme } from "../src";
export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  backgrounds: {
    default: 'Галактус',
    values: [
      { name: 'Темная', value: Theme("Темная").palette.primary.main },
      { name: 'Галактус', value: Theme("Галактус").palette.primary.main },
    ],
  },
};

import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={Theme("Галактус")}>
      <Story />
    </ThemeProvider>
  ),
];
