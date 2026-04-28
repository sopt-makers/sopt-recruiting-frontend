import { style, styleVariants } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';

import { theme } from 'styles/theme.css';

const container = style({
  position: 'relative',
});
export const containerVar = style([
  container,
  {
    width: '720px',
    '@media': {
      [breakpoints.mobile]: {
        width: '100%',
      },
    },
  },
]);

export const fileInput = style({
  display: 'none',
});

export const fileLabel = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  border: `1px solid ${theme.color.border}`,
  borderRadius: '12px',
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

export const fileLabelSizeVar = style([
  fileLabel,
  {
    padding: '12px 22px',
    '@media': {
      [breakpoints.mobile]: {
        padding: '13px 16px',
      },
    },
  },
]);

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

export const textWrapperVar = style([
  textWrapper,
  {
    ...theme.font.BODY_1_18_M,
    gap: '24px',
    '@media': {
      [breakpoints.mobile]: {
        ...theme.font.BODY_3_14_M,
        gap: '12px',
      },
    },
  },
]);

const fileName = style({
  minWidth: '0px',
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

export const fileNameSizeVar = style({
  width: '555px',
  '@media': {
    [breakpoints.mobile]: {
      width: '100%',
    },
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
  marginTop: '8px',
  color: theme.color.error,
});

export const errorTextVar = style([
  errorText,
  {
    ...theme.font.LABEL_2_16_SB,
    '@media': {
      [breakpoints.mobile]: {
        ...theme.font.LABEL_3_14_SB,
      },
    },
  },
]);

// IconPlusButton style

export const fileIcon = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '27px',
  height: '27px',
  backgroundColor: theme.color.fileUploadButton,
  borderRadius: '6px',
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
  width: '15px',
  height: '15px',
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
