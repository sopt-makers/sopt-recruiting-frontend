import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import MakersDarkLogo from '@assets/MakersDarkLogo';
import MakersLogo from '@assets/MakersLogo';
import NowsoptLogo from '@assets/NowsoptLogo';
import { DeviceTypeContext } from '@store/deviceTypeContext';
import { RecruitingInfoContext } from '@store/recruitingInfoContext';
import { ThemeContext } from '@store/themeContext';

import Nav from './Nav';
import MenuList from './Nav/MenuList';
import { containerSizeVer, containerVar, logoVar } from './style.css';

const Header = () => {
  const { deviceType } = useContext(DeviceTypeContext);
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
    if (deviceType === 'DESK') {
      setIsMenuOpen(false);
    }
  }, [deviceType]);

  const logoVariant = logoVar[deviceType];
  return (
    <>
      {isMakers != undefined && (
        <>
          <header className={`${containerVar[isMenuOpen ? 'open' : 'default']} ${containerSizeVer[deviceType]}`}>
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
          <MenuList isMenuOpen={isMenuOpen} onClickMenuToggle={handleClickMenuToggle} />
        </>
      )}
    </>
  );
};

export default Header;
