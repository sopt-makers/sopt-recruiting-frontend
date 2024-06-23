import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  position: 'relative',
  width: 720,

  cursor: 'pointer',
});

export const fileInput = style({
  display: 'none',
});

export const fileLabel = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '12px 22px',
  border: `1px solid ${theme.color.border}`,
  borderRadius: 12,
  backgroundColor: theme.color.subBackground,

  selectors: {
    [`${container}:hover &`]: {
      backgroundColor: theme.color.fileUploadButtonInside,
      stroke: theme.color.fileUploadButtonInside,
    },
  },
});

export const textWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: 24,
});
export const fileText = style({
  color: theme.color.lighterText,
  ...theme.font.BODY_1_18_M,

  selectors: {
    [`&:nth-child(2)`]: {
      color: theme.color.lightestText,
    },
  },
});

export const fileIcon = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 27,
  height: 27,
  backgroundColor: theme.color.fileUploadButton,
  borderRadius: 6,

  selectors: {
    [`${container}:hover &`]: {
      backgroundColor: theme.color.fileUploadButtonHover,
    },
  },
});
