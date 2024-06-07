import { theme } from 'styles/theme.css';

export const formColors = {
  default: {
    boxShadow: `0 0 0 1px ${theme.color.border} inset`,
    color: theme.color.placeholder,
  },
  selected: {
    boxShadow: `0 0 0 1px ${theme.color.border} inset`,
    color: theme.color.baseText,
  },
  error: {
    boxShadow: `0 0 0 1px ${theme.color.error} inset`,
  },
};
