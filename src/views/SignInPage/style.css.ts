import { style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const containerVar = style([
  container,
  {
    gap: '50px',
    margin: '90px 0 168px 0',
    width: '466px',
    '@media': {
      [breakpoints.mobile]: {
        gap: '30px',
        padding: '0 24px',
        margin: '43px 0 115px 0',
        width: '100%',
      },
    },
  },
]);
