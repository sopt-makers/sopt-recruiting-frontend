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
    recruitingInfo: { name, soptName },
  } = useContext(RecruitingInfoContext);

  const isMakers = soptName?.toLowerCase().includes('makers');

  const handleClickLogo = () => {
    if (pathname === '/') navigate(0);
    else navigate('/');
  };

  const handleLogout = () => {
    track('click-gnb-logout');
    reset();
    localStorage.removeItem('soptApplyAccessToken');
    if (pathname === '/') navigate(0);
    else navigate('/');
  };

  return (
    <header className={container}>
      <button onClick={handleClickLogo} className={logo}>
        {isMakers ? <MakersLogo /> : <NowsoptLogo />}
      </button>
      <nav>
        <ul className={menuList}>
          {!isMakers &&
            MENU_ITEMS.map(({ text, path, target, amplitudeId }) => (
              <MenuItem key={text} text={text} path={path} target={target} amplitudeId={amplitudeId} />
            ))}
          {isMakers &&
            MENU_ITEMS_MAKERS.map(({ text, path, target, amplitudeId }) => (
              <MenuItem key={text} text={text} path={path} target={target} amplitudeId={amplitudeId} />
            ))}
          {isSignedIn ? (
            <>
              <MenuItem key="로그아웃" text="로그아웃" onClick={handleLogout} />
              {name && <MenuItem key="로그인완료" text={`${name}님`} />}
            </>
          ) : (
            <MenuItem key="로그인" text="로그인" path="/" amplitudeId="click-gnb-signin" />
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
