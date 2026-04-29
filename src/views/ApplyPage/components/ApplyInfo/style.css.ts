import { style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';

import { theme } from 'styles/theme.css';

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '50px',
  width: '720px',
  margin: '90px 0 82px 0',

  '@media': {
    [breakpoints.mobile]: {
      width: '100%',
      margin: '20px 0 66px 0',
    },
  },
});

export const infoWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',

  '@media': {
    [breakpoints.mobile]: {
      gap: '14px',
    },
  },
});

const infoItems = style({
  color: theme.color.lighterText,
  listStyle: 'outside',
  whiteSpace: 'pre-wrap',

  '::marker': {
    fontSize: '10px',
  },
});

export const infoItemsVar = style([
  infoItems,
  {
    marginLeft: '20px',
    ...theme.font.BODY_1_18_M,
    letterSpacing: '-0.27px',

    '@media': {
      [breakpoints.mobile]: {
        marginLeft: '12px',
        ...theme.font.BODY_3_14_M,
        letterSpacing: '-0.21px',
      },
    },
  },
]);

export const infoItemsBold = style({
  fontWeight: 700,
});

export const dateWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const dateItems = style({
  display: 'flex',
  gap: '12px',
  alignItems: 'baseline',
});

const dateLabelBase = style({
  padding: '6px 13px',
  borderRadius: '8px',
  color: theme.color.lighterText,
  backgroundColor: theme.color.subBackground,
});

export const dateLabelVar = style([
  dateLabelBase,
  {
    ...theme.font.TITLE_5_18_SB,
    letterSpacing: '-0.27px',

    '@media': {
      [breakpoints.mobile]: {
        ...theme.font.TITLE_7_14_SB,
        letterSpacing: '-0.21px',
      },
    },
  },
]);

export const dateTextVar = style({
  ...theme.font.BODY_1_18_M,

  '@media': {
    [breakpoints.mobile]: {
      whiteSpace: 'pre-line',
      ...theme.font.BODY_3_14_M,
    },
  },
});
