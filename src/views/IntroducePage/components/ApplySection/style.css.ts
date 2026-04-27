import { style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  gap: '40px',

  '@media': {
    [breakpoints.tabletAndMobile]: { gap: '24px' },
  },
});
