import Layout from '@components/Layout';
import Radio from '@components/Radio';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { dark, light } from 'styles/theme.css';

import ApplyPage from './pages/ApplyPage';
import CompletePage from './pages/CompletePage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import PasswordPage from './pages/PasswordPage';
import ResultPage from './pages/ResultPage';
import ReviewPage from './pages/ReviewPage';
import SignupPage from './pages/SignupPage';
import 'styles/reset.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: <Error />,
    children: [
      { index: true, element: <MainPage /> },
      { path: '/sign-up', element: <SignupPage /> },
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
  const isLight = true;

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

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <div className={isLight ? light : dark}>
          <RouterProvider router={router} />
          <Radio label="뭐요" name="아니" value="아니" />
          <Radio label="아니" name="아니" value="아니" />
        </div>
      </QueryClientProvider>
    </>
  );
};

export default App;
