import NowsoptLogo from '@assets/NowsoptLogo';

import { MENU_ITEMS } from './contants';
import MenuItem from './MenuItem';
import { container, menuList } from './style.css';

const Header = () => {
  const isSignedIn = localStorage.getItem('soptApplyAccessToken');

  return (
    <header className={container}>
      <NowsoptLogo />
      <nav>
        <ul className={menuList}>
          {MENU_ITEMS.map(({ text, path, target }) => (
            <MenuItem key={text} text={text} path={path} target={target} />
          ))}
          {isSignedIn ? (
            <MenuItem key="로그인완료" text="김솝트님" />
          ) : (
            <MenuItem key="로그인" text="로그인" path="/" />
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
