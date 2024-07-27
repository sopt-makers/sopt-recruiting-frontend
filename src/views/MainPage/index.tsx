import { isBefore } from 'date-fns';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import SignedInPage from 'views/SignedInPage';
import SignInPage from 'views/SignInPage';

const MainPage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isSignedIn = localStorage.getItem('soptApplyAccessToken');

  useEffect(() => {
    const soptApplyAccessTokenExpiredTime = localStorage.getItem('soptApplyAccessTokenExpiredTime');
    const afterRecruiting = isBefore(new Date(soptApplyAccessTokenExpiredTime || ''), new Date());

    if (afterRecruiting) {
      localStorage.removeItem('soptApplyAccessToken');
      localStorage.removeItem('soptApplyAccessTokenExpiredTime');

      pathname === '/' ? navigate(0) : navigate('/');
    }
  }, [isSignedIn, pathname, navigate]);

  return <>{isSignedIn ? <SignedInPage /> : <SignInPage />}</>;
};

export default MainPage;
