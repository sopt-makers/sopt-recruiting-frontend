import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const textareaHeaderStyle = style({
  position: 'relative',
  width: '720px',
  marginBottom: '8px',
  wordBreak: 'keep-all',
  ...theme.font.TITLE_5_18_SB,
});

export const requireDot = style({
  ':before': {
    content: '',
    display: 'inline-block',
    border: `1px solid ${theme.color.primary}`,
    borderRadius: '100%',
    width: '8px',
    height: '8px',
    background: theme.color.primary,
    transform: 'translate(5px ,-10px)',
  },
});