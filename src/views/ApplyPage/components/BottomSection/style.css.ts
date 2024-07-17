import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 50,
});

export const line = style({
  width: '100%',
  margin: '100px 0 67px 0',
  border: `1px solid ${theme.color.border}`,
});

// '토요일 참석 여부'관련 디자인 논의 후 삭제될 styles
export const doubleLineCheck = style({
  display: 'flex',
  flexDirection: 'column',
});

export const label = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 16,

  width: 'fit-content',

  color: theme.color.baseText,
  ...theme.font.TITLE_5_18_SB,
});

export const circle = style({
  width: 8,
  height: 8,
  borderRadius: 4,
  backgroundColor: theme.color.primary,
});
