import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import MakersDarkLogo from '@assets/MakersDarkLogo';
import MakersLogo from '@assets/MakersLogo';
import NowsoptLogo from '@assets/NowsoptLogo';
import { useDevice } from '@hooks/useDevice';
import { RecruitingInfoContext } from '@store/recruitingInfoContext';
import { ThemeContext } from '@store/themeContext';

import Nav from './Nav';
import MenuList from './Nav/MenuList';
import { containerSizeVer, containerVar, dimmedBg, logoVar } from './style.css';

const Header = () => {
  const DEVICE_TYPE = useDevice();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClickMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const {
    recruitingInfo: { isMakers },
  } = useContext(RecruitingInfoContext);
  const { isLight } = useContext(ThemeContext);

  const handleClickLogo = () => {
    pathname === '/' ? window.location.reload() : navigate('/');
  };

  useEffect(() => {
    if (DEVICE_TYPE === 'DESK') {
      setIsMenuOpen(false);
    }
  }, [DEVICE_TYPE]);

  const logoVariant = logoVar[DEVICE_TYPE];
  return (
    <>
      {isMakers != undefined && (
        <>
          <header className={`${containerVar[isMenuOpen ? 'open' : 'default']} ${containerSizeVer[DEVICE_TYPE]}`}>
            <button onClick={handleClickLogo} style={{ cursor: 'pointer' }}>
              {isMakers ? (
                !isMenuOpen && isLight ? (
                  <MakersLogo className={logoVariant} />
                ) : (
                  <MakersDarkLogo className={logoVariant} />
                )
              ) : (
                <NowsoptLogo className={logoVariant} />
              )}
            </button>
            <Nav isMenuOpen={isMenuOpen} onClickMenuToggle={handleClickMenuToggle} />
          </header>
          {isMenuOpen && (
            <>
              <MenuList />
              <div className={dimmedBg} onClick={handleClickMenuToggle} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Header;
