import { style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';

import { theme } from 'styles/theme.css';

// ApplyPage.tsx
export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '@media': {
    [breakpoints.mobile]: {
      padding: '0 24px',
    },
  },
});

export const formContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '100px',

  width: '720px',
  marginBottom: '362px',

  '@media': {
    [breakpoints.mobile]: {
      width: '100%',
    },
  },
});
export const content = style({});

export const buttonWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',

  marginTop: '46px',
});

// section common styles

export const sectionTitle = style({
  width: '720px',
  ...theme.font.TITLE_2_28_SB,
  color: theme.color.baseText,

  '@media': {
    [breakpoints.mobile]: {
      width: '100%',
      ...theme.font.TITLE_5_18_SB,
    },
  },
});

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const sectionContainerVar = style([
  sectionContainer,
  {
    paddingTop: '166px',
    gap: '50px',

    '@media': {
      [breakpoints.mobile]: {
        paddingTop: '49px',
        gap: '40px',
      },
    },
  },
]);
