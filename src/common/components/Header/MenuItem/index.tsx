import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { menuItemVar } from './style.css';

interface MenuItemProps {
  text: string;
  type: 'default' | 'selected';
  path?: string;
}
const MenuItem = ({ text, type, path }: MenuItemProps) => {
  const navigate = useNavigate();
  const handleClickMenu = useCallback(() => {
    path && navigate(path);
  }, [navigate, path]);

  return (
    <li>
      <button type="button" className={menuItemVar[type]} onClick={handleClickMenu} disabled={!path}>
        {text}
      </button>
    </li>
  );
};

export default MenuItem;
