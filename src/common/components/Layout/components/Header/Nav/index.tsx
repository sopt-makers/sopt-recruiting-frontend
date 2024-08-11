import { IconMenu, IconXClose } from '@sopt-makers/icons';
import { useContext } from 'react';

import { useDevice } from '@hooks/useDevice';
import { ThemeContext } from '@store/themeContext';
import { theme } from 'styles/theme.css';

import MenuList from './MenuList';
import { menuIconVar } from './style.css';

const Nav = ({ isMenuOpen, onClickMenuToggle }: { isMenuOpen: boolean; onClickMenuToggle: () => void }) => {
  const DEVICE_TYPE = useDevice();
  const { isLight } = useContext(ThemeContext);

  return DEVICE_TYPE !== 'DESK' ? (
    <i className={menuIconVar[DEVICE_TYPE]} onClick={onClickMenuToggle}>
      {isMenuOpen ? <IconXClose /> : <IconMenu color={isLight ? 'currentColor' : theme.color.white} />}
    </i>
  ) : (
    <MenuList />
  );
};

export default Nav;
