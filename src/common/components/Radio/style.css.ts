import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const wrapper = style({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  width: 'fit-content',
});

export const inputStyle = style({
  border: `1.5px solid ${theme.color.border}`,
  borderRadius: '50%',
  width: '22px',
  height: '22px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',

  // TODO: 디자인 나오면 수정
  ':hover': {
    boxShadow: '0 0 0 1px lightgray',
  },

  ':checked': {
    border: `6px solid ${theme.color.primary}`,
  },

  ':focus-visible': {
    outline: `2px dotted ${theme.color.primary}`,
    outlineOffset: '2px',
  },
});

export const labelStyle = style({
  ...theme.font.BODY_2_16_M,
  cursor: 'pointer',
  fontSize: '12px',
});
