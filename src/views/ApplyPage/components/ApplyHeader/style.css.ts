import { style, styleVariants } from '@vanilla-extract/css';

import { Z_INDEX } from '@constants/zIndex';
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

export const headerContainerVar = styleVariants({
  DESK: [
    headerContainer,
    {
      padding: '24px 0 20px 6px',
      margin: '60px auto 0px',

      top: 79,
      width: 732,
    },
  ],
  TAB: [
    headerContainer,
    {
      flexDirection: 'column',
      alignItems: 'baseline',
      gap: 13,
      top: 73,
      width: 431,
      padding: '24px 32px 20px',
      margin: '60px auto 0px',
    },
  ],
  MOB: [
    headerContainer,
    {
      padding: '23px 31.5px 20px',
      top: 73,
      width: 375,
    },
  ],
});

export const buttonWrapper = style({
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  height: 'fit-content',
});
