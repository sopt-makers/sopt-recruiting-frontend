import { colors } from '@sopt-makers/colors';
import { style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme.css';

export const wrapper = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '48px',
  '@media': {
    [breakpoints.tabletAndMobile]: { gap: '24px' },
  },
});

export const listContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '900px',
  gap: '40px',
});

export const card = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  gap: '36px',
  cursor: 'pointer',
  transition: 'opacity 0.2s linear',
  ':hover': { opacity: 0.7 },
  '@media': {
    [breakpoints.mobile]: { gap: '12px' },
  },
});

export const cardLeft = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flex: 1,
  minWidth: 0,
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  height: '23px',
  marginBottom: '6px',
  gap: '6px',
  color: colors.gray300,
  ...theme.font.BODY_3_14_R,
  '@media': {
    [breakpoints.mobile]: {
      height: '16px',
      ...theme.font.LABEL_4_12_SB,
    },
  },
});

export const profileCircle = style({
  width: '18px',
  height: '18px',
  borderRadius: '50%',
  backgroundColor: colors.gray100,
  flexShrink: 0,
});

export const divider = style({
  padding: '0 2px',
  color: colors.gray200,
});

export const body = style({
  '@media': {
    [breakpoints.mobile]: {},
  },
});

export const cardTitle = style({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  wordBreak: 'break-all',
  maxHeight: '72px',
  color: colors.gray950,
  ...theme.font.TITLE_3_24_SB,
  '@media': {
    [breakpoints.tablet]: { ...theme.font.TITLE_6_16_SB, WebkitLineClamp: 2 },
    [breakpoints.mobile]: { ...theme.font.TITLE_6_16_SB, WebkitLineClamp: 1 },
  },
});

export const cardDescription = style({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  wordBreak: 'break-all',
  ...theme.font.BODY_2_16_M,
  '@media': {
    [breakpoints.tablet]: { WebkitLineClamp: 2, ...theme.font.BODY_3_14_R },
    [breakpoints.mobile]: { WebkitLineClamp: 1, ...theme.font.BODY_3_14_R },
  },
});

export const tagList = style({
  display: 'flex',
  gap: '8px',
  marginTop: '12px',

  '@media': {
    [breakpoints.tabletAndMobile]: { gap: '4px' },
  },
});

export const tag = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '28px',
  padding: '0 6px',
  borderRadius: '6px',
  backgroundColor: colors.gray50,
  ...theme.font.LABEL_4_12_SB,
  '@media': {
    [breakpoints.tabletAndMobile]: { height: '20px' },
  },
});

export const thumbnailWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '240px',
  flexShrink: 0,
  '@media': {
    [breakpoints.tabletAndMobile]: { width: '105px' },
  },
});

export const thumbnail = style({
  width: '100%',
  height: '160px',
  borderRadius: '8px',
  backgroundColor: colors.gray900,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  objectFit: 'cover',
  '@media': {
    [breakpoints.tabletAndMobile]: { height: '70px', borderRadius: '8px' },
  },
});

export const chevronIcon = style({
  width: '24px',
  height: '24px',
  '@media': {
    [breakpoints.tablet]: { width: '20px', height: '20px' },
    [breakpoints.mobile]: { width: '16px', height: '16px' },
  },
});

export const moreButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '16px 26px',
  marginTop: '30px',

  ...theme.font.LABEL_1_18_SB,
  ':hover': { color: colors.gray600 },

  '@media': {
    [breakpoints.tablet]: { ...theme.font.LABEL_2_16_SB, padding: '10px 20px' },
    [breakpoints.mobile]: { ...theme.font.LABEL_3_14_SB, padding: '9px 14px' },
  },
});
