import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 50,
  margin: '90px 0 82px 0',
  width: 720,
});

export const infoWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

export const infoItems = style({
  color: theme.color.lighterText,
  ...theme.font.BODY_1_18_M,
  whiteSpace: 'pre-wrap',
  letterSpacing: '-0.27px',
});

export const infoItemsBold = style([
  infoItems,
  {
    fontWeight: 700,
  },
]);

export const dateWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const dateItems = style({
  display: 'flex',
  gap: 12,
  alignItems: 'center',
});

export const dateLabel = style({
  padding: '6px 13px',
  borderRadius: 8,
  ...theme.font.TITLE_5_18_SB,
  color: theme.color.lighterText,
  backgroundColor: theme.color.subBackground,
});

export const dateText = style({
  ...theme.font.BODY_1_18_M,
});
