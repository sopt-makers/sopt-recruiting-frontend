import { track } from '@amplitude/analytics-browser';
import { NavLink } from 'react-router-dom';

import { menuItem, menuLink } from './style.css';

interface MenuItemProps {
  text: string;
  path?: string;
  target?: '_blank' | '_self';
  amplitudeId?: string;
  onClick?: () => void;
}

const MenuItem = ({ text, path, target, amplitudeId, onClick }: MenuItemProps) => {
  return (
    <li className={menuItem}>
      {path ? (
        <NavLink
          to={path}
          className={menuLink}
          onClick={() => (amplitudeId ? track(amplitudeId) : null)}
          target={target}>
          {text}
        </NavLink>
      ) : (
        <p className={`${onClick ? menuLink : null}`} onClick={onClick}>
          {text}
        </p>
      )}
    </li>
  );
};

export default MenuItem;
