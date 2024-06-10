import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

const containerBase = style({
  width: '100%',
  padding: '16px',
  boxShadow: `0 0 0 1px ${theme.color.border}`,
  backgroundColor: theme.color.background,
  borderRadius: '12px',
  color: theme.color.baseText,
  whiteSpace: 'pre-line',
  transition: 'all 0.3s ease',
  ...theme.font.BODY_2_16_R,
});

export const container = styleVariants({
  default: [
    containerBase,
    {
      opacity: 0,
      transform: 'translateY(0px)',
    },
  ],
  open: [
    containerBase,
    {
      opacity: 1,
      transform: 'translateY(12px)',
    },
  ],
});
