import { theme } from 'styles/theme.css';

const IconArrowsS = () => {
  return (
    <svg width="18" height="38" viewBox="0 0 18 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.2" d="M9 10L6.38481e-07 -2.47286e-07L18 1.90735e-06L9 10Z" fill={theme.color.primary} />
      <path opacity="0.5" d="M9 24L6.31387e-07 14L18 14L9 24Z" fill={theme.color.primary} />
      <path d="M9 38L6.31387e-07 28L18 28L9 38Z" fill={theme.color.primary} />
    </svg>
  );
};

export default IconArrowsS;
