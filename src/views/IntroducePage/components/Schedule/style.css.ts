import { colors } from '@sopt-makers/colors';
import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from 'styles/theme.css';

const wrapper = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
});

export const wrapperVar = styleVariants({
  DESK: [wrapper, { gap: '48px' }],
  TAB: [wrapper, { gap: '24px' }],
  MOB: [wrapper, { gap: '24px' }],
});

const container = style({
  display: 'flex',
  width: '100%',
  maxWidth: '1200px',
  flexDirection: 'column',
});

export const containerVar = styleVariants({
  DESK: [container, { gap: '28px' }],
  TAB: [container, { gap: '40px' }],
  MOB: [container, { gap: '8px' }],
});

const grid = style({
  display: 'grid',
  justifyContent: 'center',
  borderRadius: '16px',
  backgroundColor: '#f6f6f6',
});

export const gridWrapperVar = styleVariants({
  DESK: [
    grid,
    {
      gridTemplateColumns: '171px auto',
      rowGap: '20px',
      columnGap: '220px',
      padding: '56px 0px',
    },
  ],
  TAB: [
    grid,
    {
      gridTemplateColumns: '128px auto',
      rowGap: '20px',
      columnGap: '100px',
      padding: '56px 0px',
    },
  ],
  MOB: [
    grid,
    {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '20px 22px',
      textAlign: 'center',
    },
  ],
});

const scheduleGroup = style({});

export const scheduleGroupVar = styleVariants({
  DESK: [scheduleGroup, { display: 'contents' }],
  TAB: [scheduleGroup, { display: 'contents' }],
  MOB: [scheduleGroup, { display: 'flex', flexDirection: 'column', gap: '2px' }],
});

const oddText = style({
  color: colors.gray950,
});

export const oddTextVar = styleVariants({
  DESK: [oddText, { ...theme.font.HEADING_4_24_B }],
  TAB: [oddText, { ...theme.font.HEADING_6_18_B }],
  MOB: [oddText, { ...theme.font.LABEL_4_12_SB, color: colors.gray200 }],
});

const evenText = style({
  color: colors.gray950,
});

export const evenTextVar = styleVariants({
  DESK: [evenText, { fontSize: '24px', fontWeight: '400', lineHeight: '36px', letterSpacing: '-0.48px' }],
  TAB: [evenText, { ...theme.font.BODY_1_18_M }],
  MOB: [evenText, { ...theme.font.HEADING_6_18_B }],
});

const highlight = style({
  color: theme.color.primary,
  textDecorationLine: 'underline',
  fontWeight: '400',
  letterSpacing: '-0.48px',
});

export const highlightVar = styleVariants({
  DESK: [highlight, { fontSize: '24px', fontWeight: '400', lineHeight: '36px', letterSpacing: '-0.48px' }],
  TAB: [highlight, { ...theme.font.BODY_1_18_M }],
  MOB: [highlight, { ...theme.font.HEADING_6_18_B }],
});
