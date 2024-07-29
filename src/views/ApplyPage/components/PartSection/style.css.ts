import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 50,
  paddingTop: 90,
});

export const title = style({
  ...theme.font.TITLE_2_28_SB,
  color: theme.color.baseText,
});

export const partInfoWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  margin: '20px 0 50px',
});

export const partInfo = style({
  color: theme.color.lighterText,
  ...theme.font.BODY_1_18_M,
  whiteSpace: 'pre-line',
  letterSpacing: '-0.27px',
});
