import { menuList } from './style.css';
import { MENU_ITEMS_MAKERS, MENU_ITEMS_SOPT, SIGNED_IN_MENU_ITEMS_SOPT } from '../../contants';
import MenuItem from '../MenuItem';

const MenuList = () => {
  const isSignedIn = localStorage.getItem('soptApplyAccessToken');

  const menuItems = __IS_MAKERS__ ? MENU_ITEMS_MAKERS : isSignedIn ? SIGNED_IN_MENU_ITEMS_SOPT : MENU_ITEMS_SOPT;

  return (
    <nav>
      <ul className={menuList}>
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
    </nav>
  );
};

export default MenuList;
