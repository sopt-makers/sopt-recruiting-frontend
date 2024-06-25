import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  position: 'relative',
  width: 720,
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
  stroke: theme.color.subBackground,
  transition: 'all 0.2s ease',
  cursor: 'pointer',

  selectors: {
    [`${container}:hover > ${fileInput}:enabled ~ &`]: {
      backgroundColor: theme.color.fileUploadButtonInside,
      stroke: theme.color.fileUploadButtonInside,
    },
    [`${fileInput}:disabled ~ &`]: {
      color: theme.color.lighterText,
      backgroundColor: theme.color.subBackground,
      cursor: 'default',
    },
  },
});

export const fileLabelVar = styleVariants({
  default: [fileLabel, {}],
  selected: [
    fileLabel,
    {
      backgroundColor: theme.color.fileUploadButtonInside,
      stroke: theme.color.fileUploadButtonInside,
    },
  ],
  error: [
    fileLabel,
    {
      border: `1px solid ${theme.color.error}`,
    },
  ],
});

export const textWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: 24,

  color: theme.color.lighterText,
  ...theme.font.BODY_1_18_M,
});

export const fileText = style({
  ...theme.font.BODY_1_18_M,
});

const fileName = style({
  selectors: {
    [`${fileInput}:disabled ~ label > div > &`]: {
      color: theme.color.lighterText,
    },
  },
});
export const fileNameVar = styleVariants({
  default: [
    fileName,
    {
      color: theme.color.lightestText,
    },
  ],
  selected: [
    fileName,
    {
      color: theme.color.baseText,
    },
  ],
});

export const errorText = style({
  marginTop: 8,
  color: theme.color.error,
  ...theme.font.LABEL_2_16_SB,
});

// IconPlusButton style

export const fileIcon = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 27,
  height: 27,
  backgroundColor: theme.color.fileUploadButton,
  borderRadius: 6,
  transition: 'all 0.2s ease',

  ':disabled': {
    backgroundColor: theme.color.buttonDisable,
    cursor: 'default',
  },

  selectors: {
    [`${container}:hover ${fileInput}:enabled ~ label &`]: {
      backgroundColor: theme.color.fileUploadButtonHover,
    },
  },
});

const fileIconSvg = style({
  width: 15,
  height: 15,
  transition: 'all 0.2s ease',

  selectors: {
    [`${fileIcon}:disabled &`]: {
      backgroundColor: theme.color.buttonDisable,
    },
  },
});

export const fileIconSvgVar = styleVariants({
  default: [
    fileIconSvg,
    {
      transform: 'rotate(0deg)',
    },
  ],
  selected: [
    fileIconSvg,
    {
      transform: 'rotate(45deg)',
    },
  ],
});

export const iconPath = style({
  selectors: {
    [`${fileInput}:active ~ label &`]: {
      stroke: theme.color.lighterText,
    },
  },
});
