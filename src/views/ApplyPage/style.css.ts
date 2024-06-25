import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 50,

  marginBottom: 362,
  width: 720,
});

export const content = style({
  paddingTop: 90,
});

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 50,
});

export const title = style({
  ...theme.font.HEADING_3_28_B,
  color: theme.color.baseText,
  fontSize: 30,
  fontWeight: 600,
  lineHeight: '42px',
  letterSpacing: '-0.6px',
});

export const profileWrapper = style({
  display: 'flex',
  gap: 28,
});

export const profileLabel = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '76px 55px',
  width: 'fit-content',
  border: `1px solid ${theme.color.border}`,
  borderRadius: 10,
  cursor: 'pointer',
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

export const doubleWrapper = style({
  display: 'flex',
  gap: 8,
});
