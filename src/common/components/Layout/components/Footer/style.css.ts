import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

const container = style({
  display: 'flex',
  justifyContent: 'space-between',

  width: '100%',

  backgroundColor: theme.color.subBackground,
});

export const containerVar = styleVariants({
  DESK: [
    container,
    {
      height: '162px',
      paddingTop: 33,
      paddingLeft: 'calc(50px + (150 * ((100vw - 768px) / 672)))',
      paddingBottom: 38,
      paddingRight: 'calc(50px + (126 * ((100vw - 768px) / 672)))',
    },
  ],
  TAB: [
    container,
    {
      height: '162px',
      padding: '33px 50px',
    },
  ],
  MOB: [
    container,
    {
      flexDirection: 'column',
      gap: 50,
      height: '292px',
      padding: '34px 22px',
    },
  ],
});

const text = style({
  color: theme.color.lighterText,
});

const leftWrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const leftWrapperVar = styleVariants({
  DESK: [
    leftWrapper,
    {
      gap: 27,
    },
  ],
  TAB: [
    leftWrapper,
    {
      gap: 23,
    },
  ],
  MOB: [
    leftWrapper,
    {
      gap: 23,
    },
  ],
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
