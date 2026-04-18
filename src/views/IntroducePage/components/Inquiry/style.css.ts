import { colors } from '@sopt-makers/colors';
import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from 'styles/theme.css';

const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const wrapperVar = styleVariants({
  DESK: [wrapper, { gap: '48px' }],
  TAB: [wrapper, { gap: '24px' }],
  MOB: [wrapper, { gap: '24px' }],
});

const titleSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const titleSectionVar = styleVariants({
  DESK: [titleSection, { gap: '8px' }],
  TAB: [titleSection, { gap: '8px' }],
  MOB: [titleSection, { gap: '2px' }],
});

const description = style({
  color: colors.gray600,
});
export const descriptionVar = styleVariants({
  DESK: [description, { ...theme.font.TITLE_5_18_SB }],
  TAB: [description, { ...theme.font.BODY_3_14_M }],
  MOB: [description, { ...theme.font.BODY_3_14_M }],
});

const gridWrapper = style({
  display: 'grid',
  maxWidth: '1200px',
  justifyContent: 'space-between',
});

export const gridWrapperVar = styleVariants({
  DESK: [gridWrapper, { gridTemplateColumns: 'auto auto', rowGap: '65px', width: '100%' }],
  TAB: [gridWrapper, { gridTemplateColumns: '1fr', rowGap: '24px' }],
  MOB: [gridWrapper, { gridTemplateColumns: '1fr', rowGap: '24px' }],
});

const itemWrapper = style({
  display: 'flex',
  alignItems: 'center',
  maxWidth: '398px',
});

export const itemWrapperVar = styleVariants({
  DESK: [itemWrapper, { gap: '40px' }],
  TAB: [itemWrapper, { gap: '24px' }],
  MOB: [itemWrapper, { gap: '16px' }],
});

const image = style({
  objectFit: 'cover',
});

export const imageVar = styleVariants({
  DESK: [image, { width: '78px', height: '78px' }],
  TAB: [image, { width: '32px', height: '32px' }],
  MOB: [image, { width: '32px', height: '32px' }],
});

const contactContent = style({
  display: 'flex',
  flexDirection: 'column',
});

export const contactContentVar = styleVariants({
  DESK: [contactContent, { gap: '10px' }],
  TAB: [contactContent, { gap: '0px' }],
  MOB: [contactContent, { gap: '0px' }],
});

const contactTitle = style({
  color: colors.gray600,
  fontWeight: '400',
});

export const contactTitleVar = styleVariants({
  DESK: [contactTitle, { fontSize: '24px', lineHeight: '24px', letterSpacing: '-0.48px' }],
  TAB: [contactTitle, { ...theme.font.LABEL_4_12_SB }],
  MOB: [contactTitle, { ...theme.font.LABEL_4_12_SB }],
});

const contactSub = style({
  color: colors.gray950,
  fontWeight: '700',
  textDecorationLine: 'underline',
  textDecorationStyle: 'solid',
  textDecorationSkipInk: 'none',
  textDecorationThickness: 'auto',
  textUnderlineOffset: 'auto',
  textUnderlinePosition: 'from-font',
  cursor: 'pointer',
});

export const contactSubVar = styleVariants({
  DESK: [contactSub, { fontSize: '32px', lineHeight: '40px', letterSpacing: '-0.32px' }],
  TAB: [contactSub, { fontSize: '18px', lineHeight: '3028pxpx', letterSpacing: '-0.36px' }],
  MOB: [contactSub, { fontSize: '18px', lineHeight: '28px', letterSpacing: '-0.36px' }],
});
