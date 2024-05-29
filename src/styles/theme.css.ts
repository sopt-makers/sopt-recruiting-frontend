import { colors } from '@sopt-makers/colors';
import { createTheme, createThemeContract } from '@vanilla-extract/css';

const theme = createThemeContract({
  primary: null, // 기수 컬러
  primaryLight: null, // 기수 컬러 밝게
  primaryDark: null, // 기수 컬러 어둡게
  // 기수 컬러 linear
  primaryLinear:
    'linear-gradient(rgba(189, 236, 0, 0.3) 0%, rgba(189, 236, 0, 1) 45%, rgba(189, 236, 0, 0.3) 100%)',
  error: null, // error

  background: null, // background
  backgroundDimmed: null, // modal background
  subBackground: null, // callout, fix된 input, button(버전2) hover 등 기타 background

  baseFont: null, // main font
  lighterFont: null, // 희미해진 font
  lightestFont: null, // 더 희미해진 font
  placeholder: null, // input placeholder

  buttonDisable: null, // disabled button background

  border: null, // border

  resultBackground: null, // 합격페이지 background
  myPageButtonFont: null, // 마이페이지 button font
  stickyButtonFont: null, // 지원서 페이지 sticky button 선택안 된 항목 font
  fileUploadButton: null, // input file upload button
  fileUploadButtonHover: null, // input file upload button hover
  fileUploadButtonInside: null, // input file upload button 안의 십자가
  dropdownButton: null, // dropdown button 화살표

  white: null, // white
  black: null, // black
});

export const light = createTheme(theme, {
  primary: '#BDEC00',
  primaryLight: 'rgba(189, 236, 0, 0.08)',
  primaryDark: '#99BF00',
  primaryLinear:
    'linear-gradient(rgba(189, 236, 0, 0.3) 0%, rgba(189, 236, 0, 1) 45%, rgba(189, 236, 0, 0.3) 100%)',
  error: colors.error,

  background: colors.white,
  backgroundDimmed: colors.grayAlpha500,
  subBackground: colors.gray30, // gray20 인데 아직 mds에 미반영 되어서 30으로 임시 저장.

  baseFont: colors.gray950,
  lighterFont: colors.gray300,
  lightestFont: colors.gray200,
  placeholder: colors.gray100,

  buttonDisable: colors.gray50,

  border: colors.gray50,

  resultBackground: colors.gray950,
  myPageButtonFont: colors.gray400,
  stickyButtonFont: colors.gray100,
  fileUploadButton: colors.gray400,
  fileUploadButtonHover: colors.gray900,
  fileUploadButtonInside: colors.gray10,
  dropdownButton: colors.gray300,

  white: colors.white,
  black: colors.black,
});

export const dark = createTheme(theme, {
  primary: '#BDEC00',
  primaryLight: 'rgba(189, 236, 0, 0.08)',
  primaryDark: '#99BF00',
  primaryLinear:
    'linear-gradient(rgba(189, 236, 0, 0.3) 0%, rgba(189, 236, 0, 1) 45%, rgba(189, 236, 0, 0.3) 100%)',
  error: colors.error,

  background: colors.white,
  backgroundDimmed: colors.grayAlpha500,
  subBackground: colors.gray30, // gray20 인데 아직 mds에 미반영 되어서 30으로 임시 저장.

  baseFont: colors.gray950,
  lighterFont: colors.gray300,
  lightestFont: colors.gray200,
  placeholder: colors.gray100,

  buttonDisable: colors.gray50,

  border: colors.gray50,

  resultBackground: colors.gray950,
  myPageButtonFont: colors.gray400,
  stickyButtonFont: colors.gray100,
  fileUploadButton: colors.gray400,
  fileUploadButtonHover: colors.gray900,
  fileUploadButtonInside: colors.gray10,
  dropdownButton: colors.gray300,

  white: colors.white,
  black: colors.black,
});

export const vars = { theme };
