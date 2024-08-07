import { reset, track } from '@amplitude/analytics-browser';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import MakersDarkLogo from '@assets/MakersDarkLogo';
import MakersLogo from '@assets/MakersLogo';
import NowsoptLogo from '@assets/NowsoptLogo';
import { RecruitingInfoContext } from '@store/recruitingInfoContext';
import { ThemeContext } from '@store/themeContext';

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
  const { isLight } = useContext(ThemeContext);

  const menuItems = isMakers ? MENU_ITEMS_MAKERS : MENU_ITEMS;

  const handleClickLogo = () => {
    pathname === '/' ? window.location.reload() : navigate('/');
  };

  const handleLogout = () => {
    track('click-gnb-logout');
    reset();
    localStorage.removeItem('soptApplyAccessToken');
    localStorage.removeItem('soptApplyAccessTokenExpiredTime');
    pathname === '/' ? window.location.reload() : navigate('/');
  };
  return (
    <>
      {isMakers != undefined && (
        <header className={container}>
          <button onClick={handleClickLogo} className={logo}>
            {isMakers ? isLight ? <MakersLogo /> : <MakersDarkLogo /> : <NowsoptLogo />}
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
                  <MenuItem key="로그인완료" text={`${name}님`} className="amp-block" />
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
