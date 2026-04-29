import { colors } from '@sopt-makers/colors';
import { style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';

import { theme } from 'styles/theme.css';

const container = style({
  display: 'flex',
  justifyContent: 'space-between',

  width: '100%',

  backgroundColor: theme.color.subBackground,
});

export const containerVar = style([
  container,
  {
    height: '162px',
    padding: '36px 0',
    paddingLeft: 'calc(50px + (150 * ((100vw - 768px) / 672)))',
    paddingRight: 'calc(50px + (126 * ((100vw - 768px) / 672)))',

    '@media': {
      [breakpoints.tablet]: {
        padding: '36px 40px',
      },
      [breakpoints.mobile]: {
        flexDirection: 'column',
        justifyContent: 'left',
        gap: '26px',
        height: '227px',
        padding: '24px 0px 24px 24px',
      },
    },
  },
]);

const text = style({
  color: colors.black,
});

export const leftWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const titleText = style([
  text,
  {
    display: 'flex',
    alignItems: 'center',

    ...theme.font.TITLE_7_14_SB,
  },
]);

export const ruleButton = style([
  titleText,
  {
    width: 'fit-content',
    cursor: 'pointer',
  },
]);

export const copyRightText = style([
  text,
  {
    ...theme.font.BODY_3_14_R,
  },
]);

export const rightWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '16px',
});

export const channelWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});
