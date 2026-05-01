import { useEffect, useState } from 'react';
import { useDeviceType } from 'contexts/DeviceTypeProvider';

import { dimmedBgVar, menuContainerVar, menuList, menuMobListVar } from './style.css';
import { MENU_ITEMS_MAKERS, MENU_ITEMS_SOPT, SIGNED_IN_MENU_ITEMS_SOPT } from '../../contants';
import MenuItem from '../MenuItem';

const MenuList = ({ isMenuOpen, onClickMenuToggle }: { isMenuOpen?: boolean; onClickMenuToggle?: () => void }) => {
  const { deviceType } = useDeviceType();
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

  const menuItems = __IS_MAKERS__ ? MENU_ITEMS_MAKERS : isSignedIn ? SIGNED_IN_MENU_ITEMS_SOPT : MENU_ITEMS_SOPT;

  if (onClickMenuToggle && !isShown) return null;

  return (
    <nav>
      <ul className={deviceType !== 'DESK' ? `${menuMobListVar[deviceType]} ${menuContainerVar[animation]}` : menuList}>
        {!isSignedIn && (
          <>
            {menuItems.map(({ text, path, target, amplitudeId }) => (
              <MenuItem key={text} text={text} path={path} target={target} amplitudeId={amplitudeId} />
            ))}
            <MenuItem key="로그인" text="로그인" path="/auth" amplitudeId="click-gnb-signin" />
          </>
        )}
        {isSignedIn && (
          <>
            {menuItems.map(({ text, path, target, amplitudeId }) => (
              <MenuItem key={text} text={text} path={path} target={target} amplitudeId={amplitudeId} />
            ))}
          </>
        )}
      </ul>
      {onClickMenuToggle && isShown && <div className={dimmedBgVar[animation]} onClick={onClickMenuToggle} />}
    </nav>
  );
};

export default MenuList;
