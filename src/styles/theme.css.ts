import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import { createTheme, createThemeContract } from '@vanilla-extract/css';

const primaryColor = () => {
  if (__IS_MAKERS__) {
    return {
      // makers 기본 컬러
      primary: colors.gray600,
      primaryLight: colors.gray30,
      primaryDark: colors.gray950,
      primaryLinear: 'linear-gradient(rgba(63, 63, 71, 0.3) 0%, rgba(63, 63, 71, 1) 45%, rgba(63, 63, 71, 0.3) 100%)',
    };
  }
  return {
    // 기수 컬러 (매 기수마다 변경 필요)
    primary: '#00BDFF',
    primaryLight: '#153858',
    primaryDark: '#84E1FA',
    primaryLinear: '#273244',
  };
};

const color = createThemeContract({
  primary: null, // 기수 컬러
  primaryLight: null, // 기수 컬러 밝게
  primaryDark: null, // 기수 컬러 어둡게
  // 기수 컬러 linear
  primaryLinear: 'linear-gradient(rgba(73, 88, 112, 0.3) 0%, rgba(73, 88, 112, 1) 45%, rgba(73, 88, 112, 0.3) 100%)',
  error: null, // error

  background: null, // background
  backgroundDimmed: null, // modal background
  subBackground: null, // callout, fix된 input, button(버전2) hover 등 기타 background

  baseText: null, // main text
  lighterText: null, // 희미해진 text
  lightestText: null, // 더 희미해진 text
  placeholder: null, // input placeholder

  buttonDisable: null, // disabled button background

  border: null, // border

  blackBackground: null, // 합격페이지 background
  buttonText: null, // 마이페이지 button text
  errorButtonBackground: null, // 에러페이지 button background
  stickyButtonText: null, // 지원서 페이지 sticky button 선택안 된 항목 text
  fileUploadButton: null, // input file upload button
  fileUploadButtonHover: null, // input file upload button hover
  whiteButtonFill: null, // input file upload button 안의 십자가
  grayButtonFill: null, // dropdown button 화살표

  white: null, // white
  black: null, // black
});

export const light = createTheme(color, {
  primary: primaryColor().primary,
  primaryLight: primaryColor().primaryLight,
  primaryDark: primaryColor().primaryDark,
  primaryLinear: primaryColor().primaryLinear,
  error: colors.error,

  background: colors.white,
  backgroundDimmed: colors.grayAlpha500,
  subBackground: '#F5F5F5', // gray20 인데 아직 mds에 미반영 되어서 30으로 임시 저장.

  baseText: colors.gray950,
  lighterText: colors.gray300,
  lightestText: colors.gray200,
  placeholder: colors.gray100,

  buttonDisable: colors.gray50,

  border: colors.gray50,

  blackBackground: colors.gray950,
  buttonText: colors.gray400,
  errorButtonBackground: colors.gray30,
  stickyButtonText: colors.gray100,
  fileUploadButton: colors.gray400,
  fileUploadButtonHover: colors.gray900,
  whiteButtonFill: colors.gray10,
  grayButtonFill: colors.gray300,

  white: colors.white,
  black: colors.black,
});

export const dark = createTheme(color, {
  primary: primaryColor().primary,
  primaryLight: primaryColor().primaryLight,
  primaryDark: primaryColor().primaryDark,
  primaryLinear: primaryColor().primaryLinear,
  error: colors.error,

  background: colors.gray950,
  backgroundDimmed: colors.grayAlpha500,
  subBackground: colors.gray30, // gray20 인데 아직 mds에 미반영 되어서 30으로 임시 저장.

  baseText: colors.white,
  lighterText: colors.gray300,
  lightestText: colors.gray200,
  placeholder: colors.gray100,

  buttonDisable: colors.gray50,

  border: colors.gray50,

  blackBackground: colors.gray950,
  buttonText: colors.gray400,
  errorButtonBackground: colors.gray30,
  stickyButtonText: colors.gray100,
  fileUploadButton: colors.gray400,
  fileUploadButtonHover: colors.gray900,
  whiteButtonFill: colors.gray10,
  grayButtonFill: colors.gray300,

  white: colors.white,
  black: colors.black,
});

export const theme = {
  color,
  font: fontsObject,
};
