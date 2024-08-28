import { IconMenu, IconXClose } from '@sopt-makers/icons';

import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { useTheme } from 'contexts/ThemeProvider';
import { theme } from 'styles/theme.css';

import MenuList from './MenuList';
import { menuIconVar } from './style.css';

const Nav = ({ isMenuOpen, onClickMenuToggle }: { isMenuOpen: boolean; onClickMenuToggle: () => void }) => {
  const { deviceType } = useDeviceType();
  const { isLight } = useTheme();

  return deviceType !== 'DESK' ? (
    <i className={menuIconVar[deviceType]} onClick={onClickMenuToggle}>
      {isMenuOpen ? <IconXClose /> : <IconMenu color={isLight ? 'currentColor' : theme.color.white} />}
    </i>
  ) : (
    <MenuList />
  );
};

export default Nav;
