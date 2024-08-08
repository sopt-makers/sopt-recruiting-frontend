import { IconMenu, IconXClose } from '@sopt-makers/icons';

import { useDevice } from '@hooks/useDevice';

import MenuList from './MenuList';
import { menuIconVar } from './style.css';

const Nav = ({ isMenuOpen, onClickMenuToggle }: { isMenuOpen: boolean; onClickMenuToggle: () => void }) => {
  const DEVICE_TYPE = useDevice();

  return DEVICE_TYPE !== 'DESK' ? (
    <i className={menuIconVar[DEVICE_TYPE]} onClick={onClickMenuToggle}>
      {isMenuOpen ? <IconXClose /> : <IconMenu />}
    </i>
  ) : (
    <MenuList />
  );
};

export default Nav;
