import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  width: '100%',
  padding: 16,
  boxShadow: `0 0 0 1px ${theme.color.border}`,
  backgroundColor: theme.color.background,
  borderRadius: 12,
  color: theme.color.baseText,
  whiteSpace: 'pre-line',
  transition: 'all 0.3s ease',
  marginTop: 12,
  ...theme.font.BODY_2_16_R,
});
