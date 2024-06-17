import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import NowsoptLogo from '@assets/NowsoptLogo';

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
    <div className={container}>
      <button type="button" onClick={handleClickLogo}>
        <NowsoptLogo />
      </button>
      <ul className={menuList}>
        <MenuItem text="모집공고" type="default" path="/apply" />
        <MenuItem text="문의하기" type="selected" path="/sign-up" />
        <MenuItem text="로그인" type="default" />
      </ul>
    </div>
  );
};

export default Header;
