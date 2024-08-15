import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const sectionContainerVar = styleVariants({
  DESK: [
    sectionContainer,
    {
      gap: 50,
      paddingTop: 100,
    },
  ],
  TAB: [
    sectionContainer,
    {
      gap: 50,
      paddingTop: 100,
    },
  ],
  MOB: [
    sectionContainer,
    {
      gap: 30,
      paddingTop: 70,
    },
  ],
});

export const doubleWrapperVar = styleVariants({
  DESK: {
    display: 'flex',
    gap: 8,
  },
  TAB: {
    display: 'flex',
    flexDirection: 'column',
    gap: 50,
  },
  MOB: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
  },
});

// ProfileImage styles

export const profileWrapperVar = styleVariants({
  DESK: {
    display: 'flex',
    alignItems: 'center',
    gap: 28,
  },
  TAB: {
    display: 'flex',
    alignItems: 'center',
    gap: 17,
  },
  MOB: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
});

const profileLabel = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 6,
  border: `1px solid ${theme.color.border}`,
  borderRadius: 10,
  cursor: 'pointer',
});

export const profileLabelVar = styleVariants({
  default: [
    profileLabel,
    {
      borderColor: theme.color.border,
    },
  ],
  error: [
    profileLabel,
    {
      marginBottom: 22,
      borderColor: theme.color.error,
    },
  ],
  disabled: [
    profileLabel,
    {
      cursor: 'not-allowed',
    },
  ],
});

export const profileLabelSizeVar = styleVariants({
  DESK: {
    width: 134,
    height: 176,
  },
  TAB: {
    width: 134,
    height: 176,
  },
  MOB: {
    width: 106,
    height: 140,
  },
});

const errorText = style({
  position: 'absolute',
  left: 0,
  width: 'max-content',
  color: theme.color.error,
});

export const errorTextVar = styleVariants({
  DESK: [
    errorText,
    {
      bottom: -30,
      ...theme.font.LABEL_2_16_SB,
    },
  ],
  TAB: [
    errorText,
    {
      bottom: -30,
      ...theme.font.LABEL_2_16_SB,
    },
  ],
  MOB: [
    errorText,
    {
      bottom: -26,
      ...theme.font.LABEL_3_14_SB,
    },
  ],
});

export const profileImage = style({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});

export const profileTextWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  paddingBottom: 28,
});

const profileText = style({
  color: theme.color.lighterText,
});

export const profileTextVar = styleVariants({
  DESK: [
    profileText,
    {
      whiteSpace: 'pre-wrap',
      ...theme.font.BODY_2_16_R,
    },
  ],
  TAB: [
    profileText,
    {
      ...theme.font.BODY_3_14_R,
    },
  ],
  MOB: [
    profileText,
    {
      ...theme.font.BODY_4_13_R,
    },
  ],
});
