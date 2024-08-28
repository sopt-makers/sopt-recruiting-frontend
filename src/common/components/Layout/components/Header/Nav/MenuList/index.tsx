import { reset, track } from '@amplitude/analytics-browser';
import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { RecruitingInfoContext } from '@store/recruitingInfoContext';
import { useDeviceType } from 'contexts/DeviceTypeProvider';

import { dimmedBgVar, menuContainerVar, menuList, menuMobListVar } from './style.css';
import { MENU_ITEMS, MENU_ITEMS_MAKERS } from '../../contants';
import MenuItem from '../MenuItem';

const MenuList = ({ isMenuOpen, onClickMenuToggle }: { isMenuOpen?: boolean; onClickMenuToggle?: () => void }) => {
  const { deviceType } = useDeviceType();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isShown, setIsShown] = useState(isMenuOpen);
  const [animation, setAnimation] = useState<'open' | 'close'>(isMenuOpen ? 'open' : 'close');

  useEffect(() => {
    if (isMenuOpen) {
      setIsShown(true);
      setAnimation('open');
    } else {
      setAnimation('close');
      const timer = setTimeout(() => setIsShown(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isMenuOpen]);

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

  if (onClickMenuToggle && !isShown) return null;

  return (
    <nav>
      <ul className={deviceType !== 'DESK' ? `${menuMobListVar[deviceType]} ${menuContainerVar[animation]}` : menuList}>
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
      {onClickMenuToggle && isShown && <div className={dimmedBgVar[animation]} onClick={onClickMenuToggle} />}
    </nav>
  );
};

export default MenuList;
