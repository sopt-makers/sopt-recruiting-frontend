import { useLocation, useNavigate } from 'react-router-dom';

import MakersDarkLogo from '@assets/MakersDarkLogo';
import MakersLogo from '@assets/MakersLogo';
import { useTheme } from 'contexts/ThemeProvider';
import soptLogo from '@assets/soptLogo.svg';

import MenuList from './Nav/MenuList';
import { container, logo } from './style.css';
import SoptLightLogo from '@assets/SoptLightLogo';

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isLight } = useTheme();

  const handleClickLogo = () => {
    pathname === '/' ? window.location.reload() : navigate('/');
  };

  const isResultPage = pathname.includes('/result');
  return (
    <>
      {__IS_MAKERS__ != undefined && (
        <>
          <header className={container}>
            <button onClick={handleClickLogo} style={{ cursor: 'pointer' }}>
              {__IS_MAKERS__ ? (
                isLight ? (
                  <MakersLogo className={logo} />
                ) : (
                  <MakersDarkLogo className={logo} />
                )
              ) : !isResultPage ? (
                <img src={soptLogo} alt="SOPT" className={logo} />
              ) : (
                <SoptLightLogo className={logo} />
              )}
            </button>
            <MenuList />
          </header>
        </>
      )}
    </>
  );
};

export default Header;
