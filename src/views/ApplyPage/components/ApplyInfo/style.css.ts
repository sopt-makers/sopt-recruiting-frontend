import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 50,
});

export const infoContainerVar = styleVariants({
  DESK: [
    infoContainer,
    {
      width: 720,
      margin: '90px 0 82px 0',
    },
  ],
  TAB: [
    infoContainer,
    {
      width: 367,
      margin: '42px 0 50px 0',
    },
  ],
  MOB: [
    infoContainer,
    {
      width: 312,
      margin: '20px 0 66px 0',
    },
  ],
});

const infoWrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const infoWrapperVar = styleVariants({
  DESK: [
    infoWrapper,
    {
      gap: 16,
    },
  ],
  TAB: [
    infoWrapper,
    {
      gap: 16,
    },
  ],
  MOB: [
    infoWrapper,
    {
      gap: 14,
    },
  ],
});

const infoItems = style({
  color: theme.color.lighterText,
  listStyle: 'outside',
  whiteSpace: 'pre-wrap',

  '::marker': {
    fontSize: 10,
  },
});

export const infoItemsVar = styleVariants({
  DESK: [
    infoItems,
    {
      marginLeft: 20,
      ...theme.font.BODY_1_18_M,
      letterSpacing: '-0.27px',
    },
  ],
  TAB: [
    infoItems,
    {
      marginLeft: 20,
      ...theme.font.BODY_2_16_M,
      letterSpacing: '-0.24px',
    },
  ],
  MOB: [
    infoItems,
    {
      marginLeft: 12,
      ...theme.font.BODY_3_14_M,
      letterSpacing: '-0.21px',
    },
  ],
});

export const infoItemsBold = style({
  fontWeight: 700,
});

export const dateWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const dateItems = style({
  display: 'flex',
  gap: 12,
  alignItems: 'baseline',
});

const dateLabel = style({
  padding: '6px 13px',
  borderRadius: 8,
  color: theme.color.lighterText,
  backgroundColor: theme.color.subBackground,
});

export const dateLabelVar = styleVariants({
  DESK: [
    dateLabel,
    {
      ...theme.font.TITLE_5_18_SB,
      letterSpacing: '-0.27px',
    },
  ],
  TAB: [
    dateLabel,
    {
      ...theme.font.TITLE_6_16_SB,
      letterSpacing: '-0.24px',
    },
  ],
  MOB: [
    dateLabel,
    {
      ...theme.font.TITLE_7_14_SB,
      letterSpacing: '-0.21px',
    },
  ],
});

export const dateTextVar = styleVariants({
  DESK: [
    {
      ...theme.font.BODY_1_18_M,
    },
  ],
  TAB: [
    {
      whiteSpace: 'pre-line',
      ...theme.font.BODY_2_16_M,
    },
  ],
  MOB: [
    {
      whiteSpace: 'pre-line',
      ...theme.font.BODY_3_14_M,
    },
  ],
});
