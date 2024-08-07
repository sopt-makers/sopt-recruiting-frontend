import { reset, track } from '@amplitude/analytics-browser';
import { IconMenu } from '@sopt-makers/icons';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useDevice } from '@hooks/useDevice';
import { RecruitingInfoContext } from '@store/recruitingInfoContext';

import MenuItem from './MenuItem';
import { menuIcon, menuList } from './style.css';
import { MENU_ITEMS, MENU_ITEMS_MAKERS } from '../contants';

const Nav = ({ onClickMenuToggle }: { onClickMenuToggle: () => void }) => {
  const DEVICE_TYPE = useDevice();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isSignedIn = localStorage.getItem('soptApplyAccessToken');

  const {
    recruitingInfo: { name, isMakers },
  } = useContext(RecruitingInfoContext);
  const menuItems = isMakers ? MENU_ITEMS_MAKERS : MENU_ITEMS;
  const handleLogout = () => {
    track('click-gnb-logout');
    reset();
    localStorage.removeItem('soptApplyAccessToken');
    localStorage.removeItem('soptApplyAccessTokenExpiredTime');
    pathname === '/' ? window.location.reload() : navigate('/');
  };

  return DEVICE_TYPE !== 'DESK' ? (
    <i className={menuIcon} onClick={onClickMenuToggle}>
      <IconMenu />
    </i>
  ) : (
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
  );
};

export default Nav;
