import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const mainText = style({
  color: '#0F1012',
  ...theme.font.HEADING_5_20_B,
});

export const subText = style({
  marginTop: 2,
  color: '#808087',
  ...theme.font.BODY_2_16_M,
});

export const buttonOutside = style({
  width: 'fit-content',
  borderRadius: 12,
  color: 'white',
  backgroundColor: '#BDEC00',
  marginTop: 20,
  marginLeft: 'auto',
});

export const buttonInside = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  padding: '13px 20px',
  borderRadius: 12,
  transition: 'background-color 0.3s ease-out',
  ...theme.font.LABEL_3_14_SB,

  color: 'white',
  backgroundColor: '#BDEC00',

  ':hover': {
    backgroundColor: '#99BF00',
  },
  ':active': {
    margin: '0 auto',
    borderRadius: '100%',
    width: '50%',
    whiteSpace: 'nowrap',
  },
});
