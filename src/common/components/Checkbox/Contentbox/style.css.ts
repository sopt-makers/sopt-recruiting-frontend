import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  width: '100%',
  padding: '16px',
  boxShadow: `0 0 0 1px ${theme.color.border}`,
  backgroundColor: theme.color.background,
  borderRadius: '12px',
  color: theme.color.baseText,
  whiteSpace: 'pre-line',
  marginTop: '12px',
  transition: 'all 0.3s ease',
  ...theme.font.BODY_2_16_R,
});
