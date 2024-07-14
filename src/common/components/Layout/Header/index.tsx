import { useContext } from 'react';
import { Link } from 'react-router-dom';

import NowsoptLogo from '@assets/NowsoptLogo';
import { UserInfoContext, UserInfoContextType } from '@store/userInfoContext';

import { MENU_ITEMS } from './contants';
import MenuItem from './MenuItem';
import { container, logo, menuList } from './style.css';

const Header = () => {
  const isSignedIn = localStorage.getItem('soptApplyAccessToken');
  const {
    userInfo: { name },
  }: UserInfoContextType = useContext(UserInfoContext);

  return (
    <header className={container}>
      <Link to="/" className={logo}>
        <NowsoptLogo />
      </Link>
      <nav>
        <ul className={menuList}>
          {MENU_ITEMS.map(({ text, path, target }) => (
            <MenuItem key={text} text={text} path={path} target={target} />
          ))}
          {isSignedIn ? (
            <MenuItem key="로그인완료" text={`${name}님`} />
          ) : (
            <MenuItem key="로그인" text="로그인" path="/" />
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
