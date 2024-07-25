import SignedInPage from 'views/SignedInPage';
import SignInPage from 'views/SignInPage';

const MainPage = () => {
  const isSignedIn = sessionStorage.getItem('soptApplyAccessToken');

  return <>{isSignedIn ? <SignedInPage /> : <SignInPage />}</>;
};

export default MainPage;
