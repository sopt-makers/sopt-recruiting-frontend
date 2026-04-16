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

const list = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const listWrapperVar = styleVariants({
  DESK: [
    list,
    {
      gap: '16px',
    },
  ],
  TAB: [
    list,
    {
      gap: '10px',
    },
  ],
  MOB: [
    list,
    {
      flexDirection: 'column',
      gap: '10px',
    },
  ],
});

const card = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '24px',
  backgroundColor: '#f6f6f6',
  overflow: 'hidden',
  cursor: 'pointer',
});

export const cardVar = styleVariants({
  DESK: [
    card,
    {
      width: '304px',
      height: '330px',
    },
  ],
  TAB: [
    card,
    {
      width: '224px',
      height: '198px',
    },
  ],
  MOB: [
    card,
    {
      width: '320px',
      height: '198px',
    },
  ],
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

export const valueText = styleVariants({
  DESK: [theme.font.HEADING_3_28_B],
  TAB: [theme.font.TITLE_5_18_SB],
  MOB: [theme.font.TITLE_5_18_SB],
});

export const iconWrapper = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  flex: 1,
});

const imageBase = style({
  objectFit: 'cover',
  transition: 'opacity 0.3s',
});

export const image = styleVariants({
  DESK: [
    imageBase,
    {
      width: '200px',
      height: '200px',
    },
  ],
  TAB: [
    imageBase,
    {
      width: '134px',
      height: '134px',
    },
  ],
  MOB: [
    imageBase,
    {
      width: '134px',
      height: '134px',
    },
  ],
});

const description = style({
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
});

export const descriptionVar = styleVariants({
  DESK: [
    description,
    {
      ...theme.font.HEADING_3_28_B,
    },
  ],
  TAB: [
    description,
    {
      ...theme.font.TITLE_5_18_SB,
    },
  ],
  MOB: [
    description,
    {
      ...theme.font.TITLE_5_18_SB,
    },
  ],
});

export const descriptionVisible = style({
  opacity: 1,
});
