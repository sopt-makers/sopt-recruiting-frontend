import { NavLink } from 'react-router-dom';

import { menuItem, menuLink } from './style.css';

interface MenuItemProps {
  text: string;
  path?: string;
}
const MenuItem = ({ text, path }: MenuItemProps) => {
  return (
    <li className={menuItem}>
      {path ? (
        <NavLink to={path} className={menuLink}>
          {text}
        </NavLink>
      ) : (
        <p>{text}</p>
      )}
    </li>
  );
};

export default MenuItem;
