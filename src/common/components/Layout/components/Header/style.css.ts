import { style, styleVariants } from '@vanilla-extract/css';

import { Z_INDEX } from '@constants/zIndex';
import { theme } from 'styles/theme.css';

const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  position: 'sticky',
  top: 0,
  maxWidth: 1440,
  width: '100%',
  margin: '0 auto',
  padding: '22px 156px 22px 150px',

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

export const logoVar = styleVariants(
  {
    desktop: 30,
    mobile: 24,
  },
  (height) => [
    {
      height,
    },
  ],
);
