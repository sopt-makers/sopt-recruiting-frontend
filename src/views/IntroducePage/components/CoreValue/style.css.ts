import { style } from '@vanilla-extract/css';
import { theme } from 'styles/theme.css';
import { breakpoints } from 'styles/breakpoints';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '48px',
  '@media': {
    [breakpoints.tabletAndMobile]: {
      gap: '24px',
    },
  },
});

export const listWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
  '@media': {
    [breakpoints.tablet]: {
      gap: '10px',
    },
    [breakpoints.mobile]: {
      flexDirection: 'column',
      gap: '10px',
    },
  },
});

export const card = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '24px',
  backgroundColor: '#f6f6f6',
  overflow: 'hidden',
  cursor: 'pointer',
  width: '304px',
  height: '330px',
  '@media': {
    [breakpoints.tablet]: {
      width: '224px',
      height: '198px',
    },
    [breakpoints.mobile]: {
      width: '320px',
      height: '198px',
    },
  },
});

export const backgroundBlur = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
  transition: '0.3s',
});

export const backgroundBlurVisible = style({
  background: 'rgba(246, 246, 246, 0.60)',
  backdropFilter: 'blur(10px)',
});

export const content = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
});

export const front = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
});

export const valueText = style({
  ...theme.font.HEADING_3_28_B,
  '@media': {
    [breakpoints.tabletAndMobile]: {
      ...theme.font.TITLE_5_18_SB,
    },
  },
});

export const iconWrapper = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  flex: 1,
});

export const image = style({
  objectFit: 'cover',
  transition: 'opacity 0.3s',
  width: '200px',
  height: '200px',
  '@media': {
    [breakpoints.tabletAndMobile]: {
      width: '134px',
      height: '134px',
    },
  },
});

export const description = style({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '0 16px',
  textAlign: 'center',
  zIndex: 2,
  opacity: 0,
  transition: 'opacity 0.3s',
  wordBreak: 'keep-all',
  ...theme.font.HEADING_3_28_B,
  '@media': {
    [breakpoints.tabletAndMobile]: {
      ...theme.font.TITLE_5_18_SB,
    },
  },
});

export const descriptionVisible = style({
  opacity: 1,
});
