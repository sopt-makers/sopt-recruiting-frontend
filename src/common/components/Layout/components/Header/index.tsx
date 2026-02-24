import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import MakersDarkLogo from '@assets/MakersDarkLogo';
import MakersLogo from '@assets/MakersLogo';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { useTheme } from 'contexts/ThemeProvider';

import Nav from './Nav';
import MenuList from './Nav/MenuList';
import { containerSizeVer, containerVar, logoVar } from './style.css';
import SoptLogo from '@assets/SoptLogo';
import SoptLightLogo from '@assets/SoptLightLogo';

const Header = () => {
  const { deviceType } = useDeviceType();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClickMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isLight } = useTheme();

  const handleClickLogo = () => {
    pathname === '/' ? window.location.reload() : navigate('/');
  };

  const isResultPage = pathname.includes('/result');

  useEffect(() => {
    if (deviceType === 'DESK') {
      setIsMenuOpen(false);
    }
  }, [deviceType]);

  const logoVariant = logoVar[deviceType];
  return (
    <>
      {__IS_MAKERS__ != undefined && (
        <>
          <header className={`${containerVar[isMenuOpen ? 'open' : 'default']} ${containerSizeVer[deviceType]}`}>
            <button onClick={handleClickLogo} style={{ cursor: 'pointer' }}>
              {__IS_MAKERS__ ? (
                !isMenuOpen && isLight ? (
                  <MakersLogo className={logoVariant} />
                ) : (
                  <MakersDarkLogo className={logoVariant} />
                )
              ) : !isResultPage ? (
                <SoptLogo className={logoVariant} />
              ) : (
                <SoptLightLogo className={logoVariant} />
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
