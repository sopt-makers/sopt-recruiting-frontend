import { styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const successVar = styleVariants({
  DESK: { color: theme.color.primary, ...theme.font.LABEL_2_16_SB },
  TAB: { color: theme.color.primary, ...theme.font.LABEL_2_16_SB },
  MOB: { color: theme.color.primary, ...theme.font.LABEL_3_14_SB },
});
