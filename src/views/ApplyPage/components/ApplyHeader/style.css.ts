import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const headerContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '24px 0 20px',
  position: 'sticky',
  top: 74,
  width: 720,
  margin: '60px auto 0px',
  boxShadow: `0 0 0 1px ${theme.color.white}`,
  backgroundColor: theme.color.white,
  zIndex: 99,
});

export const buttonWrapper = style({
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  height: 'fit-content',
});
