import { style } from '@vanilla-extract/css';

import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: 80,
  backgroundColor: theme.color.background,
  '@media': {
    [breakpoints.tabletAndMobile]: {
      paddingTop: 48,
    },
  },
});

export const mainWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});
