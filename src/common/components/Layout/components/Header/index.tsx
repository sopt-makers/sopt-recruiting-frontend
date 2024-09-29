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

const Header = () => {
  const { deviceType } = useDeviceType();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClickMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isLight } = useTheme();
  const isMakers = (import.meta.env.MODE = 'makers');

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
                <SoptLogo className={logoVariant} />
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
