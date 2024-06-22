import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const headerContainer = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '24px 0 20px 0',
  position: 'sticky',
  top: 74,
  width: 1440,
  margin: '60px auto 0px auto',
  backgroundColor: theme.color.white,
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 720,
});

export const buttonWrapper = style({
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  height: 'fit-content',
});
