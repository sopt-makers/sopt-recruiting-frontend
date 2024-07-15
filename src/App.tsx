import { colors } from '@sopt-makers/colors';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AxiosError } from 'axios';
import { useCallback, useRef, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from '@components/Layout';
import { ModeType, ThemeContext } from '@store/themeContext';
import { UserInfoContext, UserInfoType } from '@store/userInfoContext';
import { dark, light } from 'styles/theme.css';
import 'styles/reset.css';
import CompletePage from 'views/CompletePage';
import SessionExpiredDialog from 'views/dialogs/SessionExpiredDialog';
import ErrorPage from 'views/ErrorPage';
import MainPage from 'views/MainPage';
import MyPage from 'views/MyPage';
import PasswordPage from 'views/PasswordPage';
import ResultPage from 'views/ResultPage';
import ReviewPage from 'views/ReviewPage';
import SignupPage from 'views/SignupPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: (
      <Layout>
        <ErrorPage code={500} />
      </Layout>
    ),
    children: [
      { index: true, element: <MainPage /> },
      { path: '/sign-up', element: <SignupPage /> },
      { path: '/password', element: <PasswordPage /> },
      { path: '/complete', element: <CompletePage /> },
      { path: '/my', element: <MyPage /> },
      { path: '/result', element: <ResultPage /> },
      { path: '/review', element: <ReviewPage /> },
      { path: '*', element: <ErrorPage code={404} /> },
    ],
  },
]);

const App = () => {
  const sessionRef = useRef<HTMLDialogElement>(null);

  const [isLight, setIsLight] = useState(true);
  const [userInfo, setUserInfo] = useState<UserInfoType>({});
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        gcTime: 1000 * 60 * 60,
        retry: 0,
      },
    },
    queryCache: new QueryCache({
      onError: (error) => {
        if ((error as AxiosError).response?.status === 401) {
          sessionRef.current?.showModal();
        }
      },
    }),
    mutationCache: new MutationCache({
      onError: (error) => {
        if ((error as AxiosError).response?.status === 401) {
          sessionRef.current?.showModal();
        }
      },
    }),
  });

  const themeContextValue = {
    isLight,
    handleChangeMode: (mode: ModeType) => {
      setIsLight(mode === 'light' ? true : false);
      const body = document.body;
      const bodyColor = mode === 'light' ? colors.white : colors.gray950; // theme.color.background
      body.style.backgroundColor = bodyColor;
    },
  };

  const userInfoContextValue = {
    userInfo,
    handleSaveUserInfo: useCallback((obj: UserInfoType) => {
      setUserInfo(obj);
    }, []),
  };

  return (
    <>
      <SessionExpiredDialog ref={sessionRef} />
      <ThemeContext.Provider value={themeContextValue}>
        <UserInfoContext.Provider value={userInfoContextValue}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <div className={isLight ? light : dark}>
              <RouterProvider router={router} />
            </div>
          </QueryClientProvider>
        </UserInfoContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
