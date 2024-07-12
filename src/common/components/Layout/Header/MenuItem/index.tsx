import { NavLink } from 'react-router-dom';

import { menuItem, menuLink } from './style.css';

interface MenuItemProps {
  text: string;
  path?: string;
  target?: '_blank' | '_self';
}

const MenuItem = ({ text, path, target }: MenuItemProps) => {
  return (
    <li className={menuItem}>
      {path ? (
        <NavLink to={path} className={menuLink} target={target}>
          {text}
        </NavLink>
      ) : (
        <p>{text}</p>
      )}
    </li>
  );
};

export default MenuItem;
