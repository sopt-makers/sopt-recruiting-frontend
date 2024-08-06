import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import MakersDarkLogo from '@assets/MakersDarkLogo';
import MakersLogo from '@assets/MakersLogo';
import NowsoptLogo from '@assets/NowsoptLogo';
import { useDevice } from '@hooks/useDevice';
import { RecruitingInfoContext } from '@store/recruitingInfoContext';
import { ThemeContext } from '@store/themeContext';

import Nav from './Nav';
import { container, logo } from './style.css';

const Header = () => {
  const { isTablet, isMobile } = useDevice();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const {
    recruitingInfo: { isMakers },
  } = useContext(RecruitingInfoContext);
  const { isLight } = useContext(ThemeContext);

  const handleClickLogo = () => {
    pathname === '/' ? window.location.reload() : navigate('/');
  };

  return (
    <>
      {isMakers != undefined && (
        <header className={container}>
          <button onClick={handleClickLogo} className={logo}>
            {isMakers ? isLight ? <MakersLogo /> : <MakersDarkLogo /> : <NowsoptLogo />}
          </button>
          <Nav />
        </header>
      )}
    </>
  );
};

export default Header;
