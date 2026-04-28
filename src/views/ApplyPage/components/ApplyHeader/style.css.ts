import { style } from '@vanilla-extract/css';

import { Z_INDEX } from '@constants/zIndex';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme.css';

const headerContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky',
  boxShadow: `0 0 0 1px ${theme.color.white}`,
  backgroundColor: theme.color.white,
  zIndex: Z_INDEX.applyHeader,
});

export const headerContainerVar = style([
  headerContainer,
  {
    padding: '24px 0 20px 6px',
    margin: '60px auto 0px',
    top: '79px',
    width: '732px',

    '@media': {
      [breakpoints.mobile]: {
        padding: '23px 0 20px',
        top: '73px',
        width: '100%',
      },
    },
  },
]);

export const desktopButtons = style({
  display: 'flex',

  '@media': {
    [breakpoints.mobile]: {
      display: 'none',
    },
  },
});

export const buttonWrapper = style({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  height: 'fit-content',
});
