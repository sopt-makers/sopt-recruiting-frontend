import ApplyPage from 'views/ApplyPage';
import SignInPage from 'views/SignInPage';

const MainPage = () => {
  const isSignedIn = localStorage.getItem('soptApplyAccessToken');

  return <>{isSignedIn ? <ApplyPage /> : <SignInPage />}</>;
};

export default MainPage;
