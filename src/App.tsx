import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from '@components/Layout';
import { ThemeContext } from '@store/theme-context';
import { dark, light } from 'styles/theme.css';
import 'styles/reset.css';
import ApplyPage from 'views/ApplyPage';
import CompletePage from 'views/CompletePage';
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
    // errorElement: <Error />,
    children: [
      { index: true, element: <MainPage /> },
      { path: '/sign-up', element: <SignupPage /> },
      { path: '/password', element: <PasswordPage /> },
      { path: '/apply', element: <ApplyPage /> },
      { path: '/complete', element: <CompletePage /> },
      { path: '/my', element: <MyPage /> },
      { path: '/result', element: <ResultPage /> },
      { path: '/review', element: <ReviewPage /> },
    ],
  },
]);

const App = () => {
  const [isLight, setIsLight] = useState(true);
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

  const contextValue = {
    isLight,
    handleDarkMode: () => {
      setIsLight(false);
    },
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <div className={isLight ? light : dark}>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </ThemeContext.Provider>
  );
};

export default App;
