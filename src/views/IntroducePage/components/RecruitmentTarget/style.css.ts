import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from 'styles/theme.css';

const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const wrapperVar = styleVariants({
  DESK: [
    wrapper,
    {
      gap: '48px',
    },
  ],
  TAB: [
    wrapper,
    {
      gap: '24px',
    },
  ],
  MOB: [
    wrapper,
    {
      gap: '24px',
    },
  ],
});

const containerWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const containerWrapperVar = styleVariants({
  DESK: [
    containerWrapper,
    {
      gap: '16px',
    },
  ],
  TAB: [
    containerWrapper,
    {
      gap: '10px',
    },
  ],
  MOB: [
    containerWrapper,
    {
      flexDirection: 'column',
      gap: '10px',
    },
  ],
});

export const container = style({
  display: 'flex',
  width: '304px',
  height: '228px',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '26px 54px',
  gap: '8px',
  borderRadius: '24px',
  backgroundColor: '#F6F6F6',
});

export const icon = style({
  textAlign: 'center',
  fontFamily: 'SUIT',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '164%',
  letterSpacing: '-1.16px',
  textTransform: 'uppercase',
  fontSize: '58px',
});

const description = style({
  textAlign: 'center',
  whiteSpace: 'pre-line',
});

export const descriptionVar = styleVariants({
  DESK: [
    description,
    {
      ...theme.font.TITLE_3_24_SB,
    },
  ],
  TAB: [
    description,
    {
      ...theme.font.TITLE_6_16_SB,
    },
  ],
  MOB: [
    description,
    {
      ...theme.font.TITLE_6_16_SB,
    },
  ],
});
