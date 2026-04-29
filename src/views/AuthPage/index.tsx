import SignedInPage from 'views/SignedInPage';
import SignInPage from 'views/SignInPage';

const AuthPage = () => {
  const isSignedIn = localStorage.getItem('soptApplyAccessToken');

  return <>{isSignedIn ? <SignedInPage /> : <SignInPage />}</>;
};

export default AuthPage;
