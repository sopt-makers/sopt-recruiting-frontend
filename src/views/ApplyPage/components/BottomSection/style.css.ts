import { style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';

import { theme } from 'styles/theme.css';

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',

  gap: '50px',
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
  marginBottom: '16px',

  width: 'fit-content',

  color: theme.color.baseText,
});

export const labelVar = style([
  label,
  {
    ...theme.font.TITLE_5_18_SB,
    '@media': {
      [breakpoints.mobile]: {
        ...theme.font.TITLE_6_16_SB,
      },
    },
  },
]);

export const circle = style({
  width: '8px',
  height: '8px',
  borderRadius: '4px',
  backgroundColor: theme.color.primary,
});
