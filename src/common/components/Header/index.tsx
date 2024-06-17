import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import NowsoptLogo from '@assets/NowsoptLogo';

import { menuItems } from './contants';
import MenuItem from './MenuItem';
import { container, menuList } from './style.css';

const Header = () => {
  const navigate = useNavigate();
  const handleClickLogo = useCallback(() => {
    // 클릭 액션 확정 후 수정 예정
    navigate('/');
  }, [navigate]);

  //  현재 route에 따라 조건부 렌더링 추가 에정
  return (
    <header className={container}>
      <button type="button" onClick={handleClickLogo}>
        <NowsoptLogo />
      </button>
      <ul className={menuList}>
        {menuItems.map(({ text, path }) => (
          <MenuItem key={text} text={text} type="default" path={path} />
        ))}
      </ul>
    </header>
  );
};

export default Header;
