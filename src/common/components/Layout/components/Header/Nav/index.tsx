import { IconMenu } from '@sopt-makers/icons';

import { useDevice } from '@hooks/useDevice';

import MenuList from './MenuList';
import { menuIconVar } from './style.css';

const Nav = ({ onClickMenuToggle }: { onClickMenuToggle: () => void }) => {
  const DEVICE_TYPE = useDevice();

  return DEVICE_TYPE !== 'DESK' ? (
    <i className={menuIconVar[DEVICE_TYPE]} onClick={onClickMenuToggle}>
      <IconMenu />
    </i>
  ) : (
    <MenuList />
  );
};

export default Nav;
