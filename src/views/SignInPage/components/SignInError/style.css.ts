import { colors } from '@sopt-makers/colors';
import { style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '16px 0',
  color: theme.color.error,
});

export const messageVar = style({
  color: colors.red400,
  ...theme.font.TITLE_7_14_SB,
  whiteSpace: 'pre-line',
  wordBreak: 'keep-all',

  '@media': {
    [breakpoints.tabletAndMobile]: {
      whiteSpace: 'normal',
      ...theme.font.LABEL_3_14_SB,
    },
  },
});

export const contactButton = style({
  alignSelf: 'flex-end',
  padding: '10px 10px 4px 10px',
  background: 'none',
  border: 'none',
  color: colors.gray200,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  ...theme.font.LABEL_3_14_SB,
});
