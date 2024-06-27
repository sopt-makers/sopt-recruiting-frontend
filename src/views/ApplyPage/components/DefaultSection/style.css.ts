import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 50,
});

export const title = style({
  ...theme.font.TITLE_2_28_SB,
  color: theme.color.baseText,
});

export const doubleWrapper = style({
  display: 'flex',
  gap: 8,
});

// ProfileImage styles

export const profileWrapper = style({
  display: 'flex',
  gap: 28,
});

export const profileLabel = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 6,
  width: 134,
  height: 176,
  border: `1px solid ${theme.color.border}`,
  borderRadius: 10,
  cursor: 'pointer',
});

export const profileImage = style({
  objectFit: 'cover',
  width: '100%',
});

export const profileTextWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  marginTop: 19,
});

export const profileText = style({
  ...theme.font.BODY_2_16_R,
  color: theme.color.lighterText,
  whiteSpace: 'pre-wrap',
});
