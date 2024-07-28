import { reset, track } from '@amplitude/analytics-browser';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import MakersLogo from '@assets/MakersLogo';
import NowsoptLogo from '@assets/NowsoptLogo';
import { RecruitingInfoContext } from '@store/recruitingInfoContext';

import { MENU_ITEMS, MENU_ITEMS_MAKERS } from './contants';
import MenuItem from './MenuItem';
import { container, logo, menuList } from './style.css';

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isSignedIn = localStorage.getItem('soptApplyAccessToken');

  const {
    recruitingInfo: { name, isMakers },
  } = useContext(RecruitingInfoContext);

  const menuItems = isMakers ? MENU_ITEMS_MAKERS : MENU_ITEMS;

  const handleClickLogo = () => {
    pathname === '/' ? navigate(0) : navigate('/');
  };

  const handleLogout = () => {
    track('click-gnb-logout');
    reset();
    localStorage.removeItem('soptApplyAccessToken');
    localStorage.removeItem('soptApplyAccessTokenExpiredTime');
    pathname === '/' ? navigate(0) : navigate('/');
  };
  return (
    <>
      {isMakers != undefined && (
        <header className={container}>
          <button onClick={handleClickLogo} className={logo}>
            {isMakers ? <MakersLogo /> : <NowsoptLogo />}
          </button>
          <nav>
            <ul className={menuList}>
              {!isSignedIn && (
                <>
                  {menuItems.map(({ text, path, target, amplitudeId }) => (
                    <MenuItem key={text} text={text} path={path} target={target} amplitudeId={amplitudeId} />
                  ))}
                  <MenuItem key="로그인" text="로그인" path="/" amplitudeId="click-gnb-signin" />
                </>
              )}
              {isSignedIn && name && (
                <>
                  {menuItems.map(({ text, path, target, amplitudeId }) => (
                    <MenuItem key={text} text={text} path={path} target={target} amplitudeId={amplitudeId} />
                  ))}
                  <MenuItem key="로그아웃" text="로그아웃" onClick={handleLogout} />
                  <MenuItem key="로그인완료" text={`${name}님`} />
                </>
              )}
            </ul>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
