import { colors } from '@sopt-makers/colors';
import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: 352,
  height: 252,
  marginTop: 20,
  padding: '33px 44px',
  // FIXME: gray20으로 수정해야 함.
  backgroundColor: colors.gray30,
  borderRadius: 10,
});

export const infoWrapper = style({
  display: 'flex',
  gap: 48,
  alignItems: 'center',
});

export const infoLabel = style({
  width: 56,
  minWidth: 56,
  color: colors.gray300,
  ...theme.font.BODY_2_16_R,
});

export const infoValue = style({
  color: colors.gray950,
  wordBreak: 'break-all',
  ...theme.font.BODY_2_16_M,
});

export const checkboxContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: 24,
});

export const checkboxWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  position: 'relative',
  width: 'fit-content',
  cursor: 'pointer',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  msUserSelect: 'none',
  userSelect: 'none',
  ...theme.font.BODY_1_18_M,
});

/* 브라우저 디폴트 체크박스 숨기기 */
export const hiddenCheckbox = style({
  position: 'absolute',
  opacity: 0,
  cursor: 'pointer',
  height: 0,
  width: 0,
});

/* 체크박스 커스텀 */
export const checkmark = style({
  height: 22,
  width: 22,
  border: `1px solid ${colors.gray50}`,
  borderRadius: 5,
  transition: 'all 0.3s ease',

  selectors: {
    /* Create the checkmark/indicator (hidden when not checked) */
    '&:after': {
      content: '',
      position: 'absolute',
      display: 'none',
    },

    /* 마우스 hover시 */
    [`${checkboxWrapper}:hover input ~ &`]: {
      // FIXME: gray20으로 수정해야 함.
      backgroundColor: colors.gray30,
    },

    /* 체크되었을 때 배경색 */
    [`${checkboxWrapper} input:checked ~ &`]: {
      border: `1px solid ${colors.gray600}`,
      backgroundColor: colors.gray600,
      // border: `1px solid #BDEC00`,
      // backgroundColor: '#BDEC00',
    },

    [`${checkboxWrapper} input:checked:hover ~ &`]: {
      border: `1px solid ${colors.gray950}`,
      backgroundColor: colors.gray950,
      // border: `1px solid #99BF00`,
      // backgroundColor: '#99BF00',
    },

    /* 체크되면 체크마크 보이게 하기 */
    [`${checkboxWrapper} input:checked ~ &:after`]: {
      display: 'block',
    },

    /* 체크마크 커스텀 */
    [`${checkboxWrapper} &:after`]: {
      top: 7,
      left: 8,
      width: 6,
      height: 11,
      border: `solid ${colors.white}`,
      borderWidth: '0 1.5px 1.5px 0',
      WebkitTransform: 'rotate(45deg)',
      msTransform: 'rotate(45deg)',
      transform: 'rotate(45deg)',
    },

    /* focus-visible 속성 */
    [`${checkboxWrapper} input:focus-visible ~ &`]: {
      outline: `2px dotted ${colors.gray600}`,
      // outline: `2px dotted #BDEC00`,
      outlineOffset: 2,
    },
  },
});
