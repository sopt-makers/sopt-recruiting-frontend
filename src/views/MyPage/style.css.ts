import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const containerVar = styleVariants({
  DESK: [
    container,
    {
      gap: 50,
      marginTop: 90,
    },
  ],
  TAB: [
    container,
    {
      gap: 50,
      marginTop: 90,
    },
  ],
  MOB: [
    container,
    {
      gap: 30,
      marginTop: 23,
    },
  ],
});

const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 455,
  border: `1px solid ${theme.color.border}`,
  borderRadius: 18,
});

export const infoContainerVar = styleVariants({
  DESK: [
    infoContainer,
    {
      width: 467,
      padding: '38px 80px',
    },
  ],
  TAB: [
    infoContainer,
    {
      width: 367,
      padding: '38px 50px',
    },
  ],
  MOB: [
    infoContainer,
    {
      width: 312,
      padding: '38px 34px',
    },
  ],
});

export const itemWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const infoLabelVar = styleVariants({
  DESK: {
    width: 63,
    color: theme.color.lighterText,
    ...theme.font.BODY_1_18_M,
  },
  TAB: {
    width: 63,
    color: theme.color.lighterText,
    ...theme.font.BODY_1_18_M,
  },
  MOB: {
    width: 56,
    color: theme.color.lighterText,
    ...theme.font.BODY_2_16_M,
  },
});

const infoValue = style({
  width: 132,
  color: theme.color.baseText,
  textAlign: 'center',
  ...theme.font.TITLE_5_18_SB,
});

export const infoValueVar = styleVariants({
  DESK: [
    infoValue,
    {
      width: 132,
      ...theme.font.TITLE_5_18_SB,
    },
  ],
  TAB: [
    infoValue,
    {
      width: 132,
      ...theme.font.TITLE_5_18_SB,
    },
  ],
  MOB: [
    infoValue,
    {
      width: 111,
      ...theme.font.TITLE_6_16_SB,
    },
  ],
});

export const buttonValue = style([
  itemWrapper,
  {
    marginTop: '-15px',
  },
]);

export const buttonWidthVar = styleVariants({
  DESK: {
    width: 132,
    letterSpacing: '-0.36px',
  },
  TAB: {
    width: 132,
    letterSpacing: '-0.36px',
  },
  MOB: {
    width: 111,
    letterSpacing: '-0.24px',
  },
});
