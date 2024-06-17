import NowsoptLogo from '@assets/NowsoptLogo';

import MenuItem from './MenuItem';
import { container, menuList } from './style.css';

const Header = () => {
  return (
    <div className={container}>
      <button type="button">
        <NowsoptLogo />
      </button>
      <ul className={menuList}>
        <MenuItem text="모집공고" type="default" />
        <MenuItem text="문의하기" type="selected" />
        <MenuItem text="로그인" type="default" />
      </ul>
    </div>
  );
};

export default Header;
