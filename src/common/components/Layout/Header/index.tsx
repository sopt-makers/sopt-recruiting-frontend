import NowsoptLogo from '@assets/NowsoptLogo';

import { MENU_ITEMS } from './contants';
import MenuItem from './MenuItem';
import { container, menuList } from './style.css';

const Header = () => {
  return (
    <header className={container}>
      <NowsoptLogo />
      <nav>
        <ul className={menuList}>
          {MENU_ITEMS.map(({ text, path, target }) => (
            <MenuItem key={text} text={text} path={path} target={target} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
