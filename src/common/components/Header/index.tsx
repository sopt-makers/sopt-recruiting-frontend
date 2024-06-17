import NowsoptLogo from '@assets/NowsoptLogo';

import MenuItem from './MenuItem';
import { Container, MenuList } from './style.css';

const Header = () => {
  return (
    <div className={Container}>
      <button type="button">
        <NowsoptLogo />
      </button>
      <ul className={MenuList}>
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </ul>
    </div>
  );
};

export default Header;
