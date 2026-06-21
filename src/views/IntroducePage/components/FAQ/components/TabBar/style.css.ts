import { colors } from '@sopt-makers/colors';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { breakpoints } from 'styles/breakpoints';
import { contentMaxWidth } from 'styles/layout.css';
import { theme } from 'styles/theme.css';

export const tabBar = style([
  contentMaxWidth,
  {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    '@media': {
      [breakpoints.mobile]: {
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
    },
  },
]);

export const tabRecipe = recipe({
  base: {
    border: 'none',
    borderRadius: '14px',
    cursor: 'pointer',
    transition: '0.2s',
    whiteSpace: 'nowrap',
    padding: '14px 40px',
    ...theme.font.HEADING_4_24_B,
    '@media': {
      [breakpoints.tablet]: {
        padding: '10px 12px',
        ...theme.font.LABEL_2_16_SB,
      },
      [breakpoints.mobile]: {
        padding: '8px 14px',
        ...theme.font.LABEL_3_14_SB,
      },
    },
  },
  variants: {
    state: {
      selected: { backgroundColor: '#f6f6f6', color: colors.gray950 },
      default: { backgroundColor: colors.gray10, color: colors.gray500 },
    },
  },
});
