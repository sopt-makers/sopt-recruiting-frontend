import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

export const wrapper = style({
  marginTop: '-105px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const loadingText = style({
  marginTop: '-60px',
  color: theme.color.lighterText,
  ...theme.font.BODY_2_16_R,
});
