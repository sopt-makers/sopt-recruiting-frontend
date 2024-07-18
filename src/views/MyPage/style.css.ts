import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 50,
  justifyContent: 'center',
  margin: 95,
});

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: 467,
  height: 455,
  padding: '38px 80px',
  border: `1px solid ${theme.color.border}`,
  borderRadius: 18,
});

export const itemWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const infoLabel = style({
  width: 63,
  color: theme.color.lighterText,
  ...theme.font.BODY_1_18_M,
});

export const infoValue = style({
  width: 132,
  color: theme.color.baseText,
  textAlign: 'center',
  ...theme.font.TITLE_5_18_SB,
});

export const buttonValue = style([
  itemWrapper,
  {
    marginTop: '-15px',
  },
]);

export const buttonWidth = style({
  width: 133,
});
