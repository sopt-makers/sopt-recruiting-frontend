import { style, styleVariants } from '@vanilla-extract/css';

import { Z_INDEX } from '@constants/zIndex';
import { theme } from 'styles/theme.css';

const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  position: 'fixed',
  top: 0,
  maxWidth: 1440,
  width: '100%',
  margin: '0 auto',

  zIndex: Z_INDEX.gnbHeader,
  transition: 'all 0.3s ease',
});

export const containerVar = styleVariants({
  default: [
    container,
    {
      backgroundColor: theme.color.background,
    },
  ],
  open: [
    container,
    {
      backgroundColor: theme.color.blackBackground,
      color: theme.color.whiteButtonFill,
    },
  ],
});

export const containerSizeVer = styleVariants({
  DESK: { padding: '22px 100px' },
  TAB: { padding: '22px 40px' },
  MOB: { padding: '22px 20px' },
});

export const logoVar = styleVariants(
  {
    DESK: 30,
    TAB: 24,
    MOB: 24,
  },
  (height) => [
    {
      height,
    },
  ],
);
