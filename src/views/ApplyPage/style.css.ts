import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

// ApplyPage.tsx
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

export const buttonWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,

  marginTop: 46,
});

// -Section.tsx
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

export const line = style({
  width: '100%',
  margin: '100px 0 67px 0',
  border: `1px solid ${theme.color.border}`,
});

// '토요일 참석 여부'관련 디자인 논의 후 삭제될 styles
export const doubleLineCheck = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

export const label = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,

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
