import { reset, track } from '@amplitude/analytics-browser';
import { isBefore } from 'date-fns';
import { useContext, useEffect } from 'react';
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

  const handleClickLogo = () => {
    pathname === '/' ? navigate(0) : navigate('/');
  };

  const handleLogout = () => {
    track('click-gnb-logout');
    reset();
    localStorage.removeItem('soptApplyAccessToken');
    pathname === '/' ? navigate(0) : navigate('/');
  };

  useEffect(() => {
    const soptApplyAccessTokenExpiredTime = localStorage.getItem('soptApplyAccessTokenExpiredTime');
    const afterRecruiting = isBefore(new Date(soptApplyAccessTokenExpiredTime || ''), new Date());

    if (afterRecruiting) {
      localStorage.removeItem('soptApplyAccessToken');
      localStorage.removeItem('soptApplyAccessTokenExpiredTime');

      pathname === '/' ? navigate(0) : navigate('/');
    }
  }, [isSignedIn, pathname, navigate]);

  return (
    <header className={container}>
      <button onClick={handleClickLogo} className={logo}>
        {isMakers ? <MakersLogo /> : isMakers === false ? <NowsoptLogo /> : null}
      </button>
      <nav>
        <ul className={menuList}>
          {(isMakers ? MENU_ITEMS_MAKERS : MENU_ITEMS).map(({ text, path, target, amplitudeId }) => (
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
