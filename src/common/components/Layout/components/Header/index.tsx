import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import MakersLogoDark from '@assets/MakersLogoDark';
import MakersLogoLight from '@assets/MakersLogoLight';
import SoptLogoDark from '@assets/SoptLogoDark';
import SoptLogoLight from '@assets/SoptLogoLight';
import { DeviceTypeContext } from '@store/deviceTypeContext';
import { RecruitingInfoContext } from '@store/recruitingInfoContext';
import { ThemeContext } from '@store/themeContext';

import Nav from './Nav';
import MenuList from './Nav/MenuList';
import { containerSizeVer, containerVar, logoVar } from './style.css';

const Header = () => {
  const { deviceType } = useContext(DeviceTypeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const deviceType = useDevice();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const {
    recruitingInfo: { isMakers },
  } = useContext(RecruitingInfoContext);
  const { isLight } = useContext(ThemeContext);

  const MakersLogo = isLight ? MakersLogoLight : MakersLogoDark;
  const SoptLogo = isLight ? SoptLogoLight : SoptLogoDark;
  const logoVariant = logoVar[deviceType];

  const handleClickMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickLogo = () => {
    pathname === '/' ? window.location.reload() : navigate('/');
  };

  useEffect(() => {
    if (deviceType === 'DESK') {
      setIsMenuOpen(false);
    }
  }, [deviceType]);

  return (
    <>
      {isMakers != undefined && (
        <>
          <header className={`${containerVar[isMenuOpen ? 'open' : 'default']} ${containerSizeVer[deviceType]}`}>
            <button onClick={handleClickLogo} style={{ cursor: 'pointer' }}>
              {isMakers ? !isMenuOpen && <MakersLogo className={logoVariant} /> : <SoptLogo className={logoVariant} />}
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
