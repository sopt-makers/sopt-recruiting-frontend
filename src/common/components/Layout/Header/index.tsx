import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import NowsoptLogo from '@assets/NowsoptLogo';
import { RecruitingInfoContext } from '@store/recruitingInfoContext';

import { MENU_ITEMS } from './contants';
import MenuItem from './MenuItem';
import { container, logo, menuList } from './style.css';

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isSignedIn = localStorage.getItem('soptApplyAccessToken');
  const {
    recruitingInfo: { name },
  } = useContext(RecruitingInfoContext);

  const handleClickLogo = () => {
    if (pathname === '/') navigate(0);
    else navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('soptApplyAccessToken');
    navigate(0);
  };

  return (
    <header className={container}>
      <button onClick={handleClickLogo} className={logo}>
        <NowsoptLogo />
      </button>
      <nav>
        <ul className={menuList}>
          {MENU_ITEMS.map(({ text, path, target }) => (
            <MenuItem key={text} text={text} path={path} target={target} />
          ))}
          {isSignedIn ? (
            <>
              <MenuItem key="로그아웃" text="로그아웃" onClick={handleLogout} />
              {name && <MenuItem key="로그인완료" text={`${name}님`} />}
            </>
          ) : (
            <MenuItem key="로그인" text="로그인" path="/" />
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
