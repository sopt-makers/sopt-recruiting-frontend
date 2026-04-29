import { style, styleVariants } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme.css';

const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const sectionContainerVar = style([
  sectionContainer,
  {
    gap: '50px',
    paddingTop: '100px',
    '@media': {
      [breakpoints.mobile]: {
        gap: '30px',
        paddingTop: '70px',
      },
    },
  },
]);

export const doubleWrapperVar = style({
  display: 'flex',
  gap: '8px',
  '@media': {
    [breakpoints.mobile]: {
      flexDirection: 'column',
      gap: '30px',
    },
  },
});

// ProfileImage styles

export const profileWrapperVar = style({
  display: 'flex',
  alignItems: 'center',
  gap: '28px',
  '@media': {
    [breakpoints.mobile]: {
      gap: '16px',
    },
  },
});

const profileLabel = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '6px',
  border: `1px solid ${theme.color.border}`,
  borderRadius: '10px',
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
      marginBottom: '22px',
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

export const profileLabelSizeVar = style({
  width: '134px',
  height: '176px',
  '@media': {
    [breakpoints.mobile]: {
      width: '106px',
      height: '140px',
    },
  },
});

const errorText = style({
  position: 'absolute',
  left: '0px',
  width: 'max-content',
  color: theme.color.error,
});

export const errorTextVar = style([
  errorText,
  {
    bottom: -30,
    ...theme.font.LABEL_2_16_SB,
    '@media': {
      [breakpoints.mobile]: {
        bottom: -26,
        ...theme.font.LABEL_3_14_SB,
      },
    },
  },
]);

export const profileImage = style({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});

export const profileTextWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  paddingBottom: '28px',
});

const profileText = style({
  color: theme.color.lighterText,
});

export const profileTextVar = style([
  profileText,
  {
    whiteSpace: 'pre-wrap',
    ...theme.font.BODY_2_16_R,
    '@media': {
      [breakpoints.mobile]: {
        ...theme.font.BODY_4_13_R,
      },
    },
  },
]);
