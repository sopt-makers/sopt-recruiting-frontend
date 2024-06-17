import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',

  position: 'sticky',
  bottom: 0,
  width: '100%',
  height: '162px',
  padding: '33px 176px 38px 200px',

  backgroundColor: theme.color.subBackground,
});

export const leftWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 27,
});
export const ruleButton = style({
  display: 'flex',
  alignItems: 'center',

  color: theme.color.lighterText,
  ...theme.font.TITLE_7_14_SB,

  cursor: 'pointer',
});

export const ruleText = style({
  marginTop: 2,
});

export const copyRightText = style({
  ...theme.font.BODY_3_14_R,
  color: theme.color.lighterText,
});

export const rightWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 29,
});

export const channelText = style({
  ...theme.font.TITLE_7_14_SB,
  color: theme.color.lighterText,
});

export const channelWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
});
