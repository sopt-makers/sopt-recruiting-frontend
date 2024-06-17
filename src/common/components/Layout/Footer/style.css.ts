import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',

  width: '100%',
  height: '162px',
  padding: '33px 176px 38px 200px',

  backgroundColor: theme.color.subBackground,
});

const text = style({
  color: theme.color.lighterText,
});

export const leftWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 27,
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

export const ruleText = style({
  marginTop: 2,
});

export const copyRightText = style([
  text,
  {
    ...theme.font.BODY_3_14_R,
  },
]);

export const rightWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 29,
});

export const channelWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
});
