import { style } from '@vanilla-extract/css';

import { Z_INDEX } from '@constants/zIndex';
import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  position: 'sticky',
  top: 0,
  maxWidth: 1440,
  width: '100%',
  margin: '0 auto',
  padding: '22px 156px 22px 150px',

  backgroundColor: theme.color.background,

  zIndex: Z_INDEX.gnbHeader,
});

export const logo = style({ height: 30, cursor: 'pointer' });

export const menuList = style({
  display: 'flex',
  alignItems: 'center',
  gap: 40,
});
