import { style } from '@vanilla-extract/css';

import { Z_INDEX } from '@constants/zIndex';
import { theme } from 'styles/theme.css';

export const headerContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '24px 360px 20px',
  position: 'sticky',
  top: 74,
  width: 1440,
  margin: '60px auto 0px',
  boxShadow: `0 0 0 1px ${theme.color.white}`,
  backgroundColor: theme.color.white,
  zIndex: Z_INDEX.applyHeader,
});

export const buttonWrapper = style({
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  height: 'fit-content',
});
