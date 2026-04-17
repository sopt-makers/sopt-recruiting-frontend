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
      width: '100%',
      maxWidth: '100vw',
      overflowX: 'hidden',
    },
  ],
});

const container = style({
  display: 'grid',
  gridTemplateRows: 'repeat(2, fit-content(100%))',
  gridTemplateColumns: 'repeat(3, fit-content(100%))',
  gap: '24px',
});

export const containerVar = styleVariants({
  DESK: [
    container,
    {
      gap: '16px',
    },
  ],
  TAB: [
    container,
    {
      gap: '8px',
    },
  ],
  MOB: [
    {
      display: 'flex',
      width: '100%',
      padding: '0 20px',
      overflowX: 'scroll',
      scrollSnapType: 'x mandatory',
      scrollPaddingLeft: '20px',
      gap: '12px',
      scrollbarWidth: 'none',
      scrollBehavior: 'smooth',
    },
  ],
});

const card = style({
  display: 'flex',
  maxWidth: '380px',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '#f6f6f6',
  borderRadius: '24px',
});

export const cardVar = styleVariants({
  DESK: [
    card,
    {
      height: '284px',
      padding: '38px 40px',
    },
  ],
  TAB: [
    card,
    {
      width: '224px',
      height: '200px',
      padding: '20px',
    },
  ],
  MOB: [
    card,
    {
      width: '200px',
      height: '220px',
      padding: '16px',
      flexShrink: 0,
      scrollSnapAlign: 'start',
    },
  ],
});

export const nameVar = styleVariants({
  DESK: [
    {
      paddingTop: '8px',
      ...theme.font.HEADING_2_32_B,
    },
  ],
  TAB: [
    {
      paddingTop: '8px',
      ...theme.font.TITLE_6_16_SB,
    },
  ],
  MOB: [
    {
      paddingTop: '8px',
      ...theme.font.TITLE_6_16_SB,
    },
  ],
});

export const descriptionVar = styleVariants({
  DESK: [
    {
      ...theme.font.BODY_1_18_M,
    },
  ],
  TAB: [
    {
      ...theme.font.BODY_4_13_R,
    },
  ],
  MOB: [
    {
      ...theme.font.BODY_4_13_R,
    },
  ],
});
