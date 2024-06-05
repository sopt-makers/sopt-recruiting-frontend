import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const textareaHeaderStyle = style({
  width: '720px',
  marginBottom: '8px',
  wordBreak: 'keep-all',
  ...theme.font.TITLE_5_18_SB,
});
