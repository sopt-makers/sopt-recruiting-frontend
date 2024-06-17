import NowsoptLogo from '@assets/NowsoptLogo';

import { menuItems } from './contants';
import MenuItem from './MenuItem';
import { container, menuList } from './style.css';

const Header = () => {
  return (
    <header className={container}>
      <NowsoptLogo />
      <nav>
        <ul className={menuList}>
          {menuItems.map(({ text, path }) => (
            <MenuItem key={text} text={text} path={path} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
