import { colors } from '@sopt-makers/colors';
import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { theme } from 'styles/theme.css';

const wrapperBase = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const wrapper = styleVariants({
  DESK: [wrapperBase, { gap: '48px' }],
  TAB: [wrapperBase, { gap: '16px' }],
  MOB: [wrapperBase, { gap: '16px' }],
});

const listWrapperBase = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '16px',
  listStyle: 'none',
});

export const listWrapperVar = styleVariants({
  DESK: [listWrapperBase, { paddingTop: '32px', gap: '16px' }],
  TAB: [listWrapperBase, { gap: '8px' }],
  MOB: [listWrapperBase, { gap: '8px' }],
});

const itemBase = style({
  display: 'flex',
  maxWidth: '1200px',
  width: '100%',
  flexDirection: 'column',
  borderRadius: '30px',
  padding: '40px 50px',
  cursor: 'pointer',
  transition: '0.2s',
});

export const itemVar = recipe({
  base: itemBase,
  variants: {
    state: {
      opened: { backgroundColor: '#f6f6f6' },
      closed: { backgroundColor: 'transparent' },
    },
    viewport: {
      DESK: { padding: '40px 50px' },
      TAB: { padding: '20px' },
      MOB: { padding: '20px' },
    },
  },
});

export const questionWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '14px',
});

const questionTextBase = style({
  fontFamily: 'SUIT',
  color: colors.gray950,

  selectors: {
    '&::before': {
      content: '"Q. "',
      color: theme.color.primary,
      fontFamily: 'SUIT',
    },
  },
});

export const questionTextVar = styleVariants({
  DESK: [
    questionTextBase,
    {
      fontSize: '24px',
      lineHeight: '36px',
      fontWeight: 600,
      selectors: { '&::before': { fontWeight: 800, fontSize: '27px', lineHeight: '46px' } },
    },
  ],
  TAB: [questionTextBase, { ...theme.font.BODY_3_14_M }],
  MOB: [questionTextBase, { ...theme.font.BODY_3_14_M }],
});

const answerLabelBase = style({
  color: theme.color.primary,
  fontFamily: 'SUIT',
  fontWeight: 800,
  flexShrink: 0,
});

export const answerLabelVar = styleVariants({
  DESK: [answerLabelBase, { fontSize: '27px', lineHeight: '44px' }],
  TAB: [answerLabelBase, { ...theme.font.BODY_3_14_M }],
  MOB: [answerLabelBase, { ...theme.font.BODY_3_14_M }],
});

const answerTextBase = style({
  fontFamily: 'SUIT',
  fontWeight: 400,
  wordBreak: 'keep-all',
  color: colors.gray600,
  whiteSpace: 'pre-line',
});

export const answerTextVar = styleVariants({
  DESK: [answerTextBase, { fontSize: '24px', lineHeight: '44px' }],
  TAB: [answerTextBase, { ...theme.font.BODY_2_16_R }],
  MOB: [answerTextBase, { ...theme.font.BODY_3_14_M }],
});

const iconWrapperBase = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '40px',
  height: '40px',
  flexShrink: 0,
  transition: 'transform 0.2s',
});

export const iconWrapperVar = recipe({
  base: iconWrapperBase,
  variants: {
    state: {
      opened: { transform: 'rotate(180deg)' },
      closed: { transform: 'rotate(0deg)' },
    },
    viewport: {
      DESK: { width: '40px', height: '40px' },
      TAB: { width: '24px', height: '24px' },
      MOB: { width: '24px', height: '24px' },
    },
  },
});

const tabBarBase = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
});

export const tabBar = styleVariants({
  DESK: [tabBarBase, { gap: '8px' }],
  TAB: [tabBarBase, { gap: '8px' }],
  MOB: [tabBarBase, { flexWrap: 'wrap', justifyContent: 'center' }],
});

export const tabRecipe = recipe({
  base: {
    border: 'none',
    borderRadius: '14px',
    cursor: 'pointer',
    transition: '0.2s',
    whiteSpace: 'nowrap',
  },
  variants: {
    state: {
      selected: { backgroundColor: '#f6f6f6', color: colors.gray950 },
      default: { backgroundColor: colors.gray10, color: colors.gray500 },
    },
    viewport: {
      DESK: { padding: '14px 40px', ...theme.font.HEADING_4_24_B },
      TAB: { padding: '10px 12px', ...theme.font.LABEL_2_16_SB },
      MOB: { padding: '8px 14px', ...theme.font.LABEL_3_14_SB },
    },
  },
});

export const answerWrapper = style({
  display: 'flex',
  gap: '10px',
  alignItems: 'flex-start',
  marginTop: '16px',
});
