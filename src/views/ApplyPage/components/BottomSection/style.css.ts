import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 50,
});

export const line = style({
  width: '100%',
  margin: '100px 0',
  border: `1px solid ${theme.color.border}`,
});

// '토요일 참석 여부'관련 디자인 논의 후 삭제될 styles
export const doubleLineCheck = style({
  display: 'flex',
  flexDirection: 'column',
});

const label = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 16,

  width: 'fit-content',

  color: theme.color.baseText,
});

export const labelVar = styleVariants({
  DESK: [
    label,
    {
      ...theme.font.TITLE_5_18_SB,
    },
  ],
  TAB: [
    label,
    {
      ...theme.font.TITLE_5_18_SB,
    },
  ],
  MOB: [
    label,
    {
      ...theme.font.TITLE_6_16_SB,
    },
  ],
});

export const circle = style({
  width: 8,
  height: 8,
  borderRadius: 4,
  backgroundColor: theme.color.primary,
});
