import { theme } from 'styles/theme.css';

export const selectValues = [
  {
    label: '성별',
    default: '성별을 선택하세요',
    options: ['남자', '여자'],
  },
];

export const selectColors = {
  default: {
    color: theme.color.placeholder,
  },
  selected: {
    color: theme.color.baseText,
  },
  error: {
    boxShadow: `0 0 0 1px ${theme.color.error} inset`,
  },
};
