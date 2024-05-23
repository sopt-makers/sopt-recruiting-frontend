import { colors } from '@sopt-makers/colors';
import { createTheme, createThemeContract } from '@vanilla-extract/css';

const theme = createThemeContract({
  background: null,
  backgroundDimmed: null,
  subBackground: null,
  altBackground: null, // alternative의 약자.
  primaryFont: null,
  secondaryFont: null,
  tertiaryFont: null,
  quaternaryFont: null,
  placeholder: null,
  buttonHover: null,
  buttonDisable: null,
  fileUploadButton: null,
  fileUploadButtonHover: null,
  border: null,
  primary: null,
  primaryLight: null,
  primaryDark: null,
  primaryLinear: null,
  error: null,
  white: null,
  black: null,
});

export const light = createTheme(theme, {
  background: colors.white,
  backgroundDimmed: colors.grayAlpha500,
  subBackground: colors.gray30, // gray20 인데 아직 mds에 미반영 되어서 30으로 임시 저장.
  altBackground: colors.gray10, // alternative의 약자.
  primaryFont: colors.gray950,
  secondaryFont: colors.gray300,
  tertiaryFont: colors.gray200,
  quaternaryFont: colors.gray100,
  placeholder: colors.gray100,
  buttonHover: colors.gray30, // gray20 인데 아직 mds에 미반영 되어서 30으로 임시 저장.
  buttonDisable: colors.gray30,
  fileUploadButton: colors.gray400,
  fileUploadButtonHover: colors.gray900,
  border: colors.gray50,
  primary: '#BDEC00',
  primaryLight: 'rgba(189, 236, 0, 0.08)',
  primaryDark: '#99BF00',
  primaryLinear:
    'linear-gradient(rgba(189, 236, 0, 0.3) 0%, rgba(189, 236, 0, 1) 45%, rgba(189, 236, 0, 0.3) 100%)',
  error: colors.error,
  white: colors.white,
  black: colors.black,
});

export const dark = createTheme(theme, {
  background: colors.white,
  backgroundDimmed: colors.grayAlpha500,
  subBackground: colors.gray30, // gray20 인데 아직 mds에 미반영 되어서 30으로 임시 저장.
  altBackground: colors.gray10, // alternative의 약자.
  primaryFont: colors.gray950,
  secondaryFont: colors.gray300,
  tertiaryFont: colors.gray200,
  quaternaryFont: colors.gray100,
  placeholder: colors.gray100,
  buttonHover: colors.gray30, // gray20 인데 아직 mds에 미반영 되어서 30으로 임시 저장.
  buttonDisable: colors.gray30,
  fileUploadButton: colors.gray400,
  fileUploadButtonHover: colors.gray900,
  border: colors.gray50,
  primary: '#BDEC00',
  primaryLight: 'rgba(189, 236, 0, 0.08)',
  primaryDark: '#99BF00',
  primaryLinear:
    'linear-gradient(rgba(189, 236, 0, 0.3) 0%, rgba(189, 236, 0, 1) 45%, rgba(189, 236, 0, 0.3) 100%)',
  error: colors.error,
  white: colors.white,
  black: colors.black,
});

export const vars = { theme };
