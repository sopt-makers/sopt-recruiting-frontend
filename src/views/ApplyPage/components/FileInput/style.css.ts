import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

const container = style({
  position: 'relative',
});
export const containerVar = styleVariants({
  DESK: [
    container,
    {
      width: 720,
    },
  ],
  TAB: [
    container,
    {
      width: 367,
    },
  ],
  MOB: [
    container,
    {
      width: 312,
    },
  ],
});

export const fileInput = style({
  display: 'none',
});

export const fileLabel = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  border: `1px solid ${theme.color.border}`,
  borderRadius: 12,
  backgroundColor: theme.color.subBackground,
  stroke: theme.color.subBackground,
  transition: 'all 0.2s ease',
  cursor: 'pointer',

  selectors: {
    [`${container}:hover > ${fileInput}:enabled ~ &`]: {
      backgroundColor: theme.color.whiteButtonFill,
      stroke: theme.color.whiteButtonFill,
    },
    [`${fileInput}:disabled ~ &`]: {
      color: theme.color.lighterText,
      backgroundColor: theme.color.subBackground,
      cursor: 'not-allowed',
    },
  },
});

export const fileLabelSizeVar = styleVariants({
  DESK: [
    fileLabel,
    {
      padding: '12px 22px',
    },
  ],
  TAB: [
    fileLabel,
    {
      padding: '12px 14px 11px 22px',
    },
  ],
  MOB: [
    fileLabel,
    {
      padding: '13px 16px',
    },
  ],
});

export const fileLabelVar = styleVariants({
  default: [fileLabel, {}],
  selected: [
    fileLabel,
    {
      backgroundColor: theme.color.whiteButtonFill,
      stroke: theme.color.whiteButtonFill,
    },
  ],
  error: [
    fileLabel,
    {
      border: `1px solid ${theme.color.error}`,
    },
  ],
});

const textWrapper = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',

  color: theme.color.lighterText,
});

export const textWrapperVar = styleVariants({
  DESK: [
    textWrapper,
    {
      ...theme.font.BODY_1_18_M,
      gap: 24,
    },
  ],
  TAB: [
    textWrapper,
    {
      ...theme.font.BODY_1_18_M,
      gap: 24,
    },
  ],
  MOB: [
    textWrapper,
    {
      ...theme.font.BODY_3_14_M,
      gap: 12,
    },
  ],
});

const fileName = style({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',

  selectors: {
    [`${fileInput}:disabled ~ label > div > &`]: {
      color: theme.color.lighterText,
      cursor: 'not-allowed',
    },
  },
});

export const fileNameSizeVar = styleVariants({
  DESK: {
    width: 555,
  },
  TAB: {
    width: 210,
  },
  MOB: {
    width: 185,
  },
});
export const fileNameVar = styleVariants({
  default: [
    fileName,
    {
      color: theme.color.placeholder,
    },
  ],
  selected: [
    fileName,
    {
      color: theme.color.baseText,
    },
  ],
});

const errorText = style({
  marginTop: 8,
  color: theme.color.error,
});

export const errorTextVar = styleVariants({
  DESK: [
    errorText,
    {
      ...theme.font.LABEL_2_16_SB,
    },
  ],
  TAB: [
    errorText,
    {
      ...theme.font.LABEL_2_16_SB,
    },
  ],
  MOB: [
    errorText,
    {
      ...theme.font.LABEL_3_14_SB,
    },
  ],
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
    cursor: 'not-allowed',
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
      cursor: 'not-allowed',
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
    [`${fileInput}:enabled:active ~ label &`]: {
      stroke: theme.color.lighterText,
    },
  },
});
