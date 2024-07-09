import { colors } from '@sopt-makers/colors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from '@components/Layout';
import { ThemeContext } from '@store/themeContext';
import { UserInfoContext, UserInfoType } from '@store/userInfoContext';
import { dark, light } from 'styles/theme.css';
import 'styles/reset.css';
import ApplyPage from 'views/ApplyPage';
import CompletePage from 'views/CompletePage';
import ErrorPage from 'views/ErrorPage';
import MainPage from 'views/MainPage';
import MyPage from 'views/MyPage';
import PasswordPage from 'views/PasswordPage';
import ResultPage from 'views/ResultPage';
import ReviewPage from 'views/ReviewPage';
import SignupPage from 'views/SignupPage';
import TestPage from 'views/TestPage';

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
      { path: '/apply', element: <ApplyPage /> },
      { path: '/complete', element: <CompletePage /> },
      { path: '/my', element: <MyPage /> },
      { path: '/result', element: <ResultPage /> },
      { path: '/review', element: <ReviewPage /> },
      { path: '*', element: <ErrorPage code={404} /> },
      { path: '/test', element: <TestPage /> },
    ],
  },
]);

const App = () => {
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
  });

  const themeContextValue = {
    isLight,
    handleChangeMode: (mode: 'light' | 'dark') => {
      setIsLight(mode === 'light' ? true : false);
      const body = document.body;
      const bodyColor = mode === 'light' ? colors.white : colors.gray950; // theme.color.background
      body.style.backgroundColor = bodyColor;
    },
  };

  const userInfoContextValue = {
    userInfo,
    handleSaveUserInfo: (obj: object) => {
      setUserInfo(obj);
    },
  };

  return (
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
  );
};

export default App;
